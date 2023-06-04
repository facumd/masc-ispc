from django.contrib import admin

from .models import Subcategory
from apps.category.serializers import CategorySerializer

# Register your models here.


class SubcategoryAdmin(admin.ModelAdmin):
    category = CategorySerializer()
    list_display = ('id', 'name', 'slug', 'description',
                    'category', 'created_at', 'updated_at')
    list_display_links = ('name', )
    list_per_page = 25


admin.site.register(Subcategory, SubcategoryAdmin)
