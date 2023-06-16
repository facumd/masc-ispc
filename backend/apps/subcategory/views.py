from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Subcategory
from .serializers import SubcategorySerializer

# Create your views here.


class SubcategoryListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Subcategory.objects.all().exists():
            subcategories = Subcategory.objects.all()
            serializer = SubcategorySerializer(subcategories, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": "Subcategories Not Found"}, status=status.HTTP_404_NOT_FOUND
            )


class SubcategoryDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):
        if Subcategory.objects.filter(slug=slug).exists():
            subcategoryDetail = Subcategory.objects.filter(slug=slug)
            serializer = SubcategorySerializer(subcategoryDetail, many=True)
            return Response({"subcategory": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": "Subcategory Not Found"}, status=status.HTTP_404_NOT_FOUND
            )
