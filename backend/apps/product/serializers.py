from rest_framework import serializers
from .models import Product

from apps.subcategory.serializers import SubcategorySerializer
from apps.account.serializers import UserSerializer


class ProductSerializer(serializers.ModelSerializer):
    subcategory = SubcategorySerializer()
    created_by = UserSerializer()

    class Meta:
        model = Product
        fields = ('id', 'title', 'slug', 'description', 'price', 'stock', 'image_link',
                  'image_file', 'subcategory', 'created_by', 'created_at', 'updated_at')
