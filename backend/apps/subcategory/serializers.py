from rest_framework import serializers
from .models import Subcategory

from apps.category.serializers import CategorySerializer


class SubcategorySerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Subcategory
        fields = ('id', 'name', 'slug', 'description',
                  'category', 'created_at', 'updated_at')
