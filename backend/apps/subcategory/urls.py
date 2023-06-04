from django.urls import path

from .views import *

urlpatterns = [
    path('list', SubcategoryListView.as_view(), name='subcategory-list'),
    path('<str:slug>', SubcategoryDetailView.as_view(), name='subcategory-detail'),
]
