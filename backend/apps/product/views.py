from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer

# Create your views here.


class ProductListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Product.objects.all().exists():
            products = Product.objects.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Products Not Found'}, status=status.HTTP_404_NOT_FOUND)


class ProductDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):
        if Product.objects.filter(slug=slug).exists():
            productDetail = Product.objects.filter(slug=slug)
            serializer = ProductSerializer(productDetail, many=True)
            return Response({'Product': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Product Not Found'}, status=status.HTTP_404_NOT_FOUND)
