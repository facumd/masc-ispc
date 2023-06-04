from django.contrib import admin

from .models import Product
from apps.subcategory.serializers import SubcategorySerializer
from apps.account.serializers import UserSerializer

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    subcategory = SubcategorySerializer()
    created_by = UserSerializer()
    list_display = ('id', 'title', 'slug', 'description', 'price', 'stock', 'image_link',
                    'image_file', 'subcategory', 'created_by', 'created_at', 'updated_at')
    list_display_links = ('title', )
    list_per_page = 25


admin.site.register(Product, ProductAdmin)
