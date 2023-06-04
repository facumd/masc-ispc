from django.urls import path

from .views import *

urlpatterns = [
    path('list', ProductListView.as_view(), name='product-list'),
    path('<str:slug>', ProductDetailView.as_view(), name='product-detail'),
]
