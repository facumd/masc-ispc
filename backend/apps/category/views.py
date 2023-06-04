from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Category
from .serializers import CategorySerializer

# Create your views here.


class CategoryListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Category.objects.all().exists():
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True)
            return Response({'categories': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Categories Not Found'}, status=status.HTTP_404_NOT_FOUND)


class CategoryDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):
        if Category.objects.filter(slug=slug).exists():
            categoryDetail = Category.objects.filter(slug=slug)
            serializer = CategorySerializer(categoryDetail, many=True)
            return Response({'category': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Category Not Found'}, status=status.HTTP_404_NOT_FOUND)
