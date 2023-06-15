from django.shortcuts import render
from rest_framework import status, permissions
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.views import APIView
from rest_framework.request import Request
from django.views import View
import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY


class PaymentView(APIView):
    permissions_classes = [
        permissions.AllowAny,
    ]

    def post(self, request: Request, *args, **kwargs):
        items = request.data.get("items", [])
        line_items = []

        for item in items:
            product = {
                "name": item.get("title"),
                "price": item.get("price"),
                "id": item.get("id"),
                "image": item.get("image_link"),
            }

            line_item = {
                "price_data": {
                    "currency": "usd",
                    "unit_amount": int(
                        float(product.get("price", "0").replace(".", ""))
                    ),
                    "product_data": {
                        "name": product["name"],
                        "images": [product["image"]],
                    },
                },
                "quantity": 1,
            }

            line_items.append(line_item)

        YOUR_DOMAIN = "http://127.0.0.1:8000"

        checkout_session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=line_items,
            metadata={"product_id": product["id"]},
            mode="payment",
            success_url="http://localhost:4200/success",
            cancel_url="http://localhost:4200/cancel",
        )

        return JsonResponse({"id": checkout_session.id})
