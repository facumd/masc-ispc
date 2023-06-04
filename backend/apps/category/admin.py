from django.contrib import admin

from .models import Category

# Register your models here.


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug', 'description',
                    'created_at', 'updated_at')
    list_display_links = ('name', )
    list_per_page = 25


admin.site.register(Category, CategoryAdmin)
