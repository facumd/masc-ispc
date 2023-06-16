from django.shortcuts import render
from django.conf import settings
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from django.core.files.storage import default_storage

from .models import Product, UserAccount, Subcategory
from .serializers import ProductSerializer

# Create your views here.


class ProductListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        try:
            products = Product.objects.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            raise NotFound(detail="Products Not Found")

    def post(self, request: Request, format=None):
        try:
            title = request.data.get("title")
            slug = request.data.get("slug")
            description = request.data.get("description")
            price = request.data.get("price")
            stock = request.data.get("stock")
            image_link = request.data.get("image_link")
            image_file = request.FILES.get("image_file")
            subcategory = Subcategory.objects.get(pk=request.data.get("subcategory"))
            created_by = UserAccount.objects.get(pk=request.data.get("created_by"))

            product = Product(
                title=title,
                slug=slug,
                description=description,
                price=price,
                stock=stock,
                image_link=image_link,
                subcategory=subcategory,
                created_by=created_by,
            )

            if image_file:
                image = image_file.name
                path = default_storage.save(
                    f"{settings.MEDIA_ROOT}/products/{image}", image_file
                )
                product.image_file = path

            product.save()
            serializer = ProductSerializer(product)
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED,
            )

        except Exception as ex:
            return Response({str(ex)}, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):
        try:
            product = Product.objects.get(slug=slug)
            serializer = ProductSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response(
                {"error": "Product Not Found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, slug, format=None):
        try:
            product = Product.objects.get(slug=slug)
            serializer = ProductSerializer(product, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Product.DoesNotExist:
            return Response(
                {"error": "Product Not Found"}, status=status.HTTP_404_NOT_FOUND
            )

    def delete(self, request, slug, format=None):
        try:
            product = Product.objects.get(slug=slug)
            product.delete()
            return Response({"Product Deleted"}, status=status.HTTP_204_NO_CONTENT)
        except Product.DoesNotExist:
            return Response(
                {"error": "Product Not Found"}, status=status.HTTP_404_NOT_FOUND
            )
