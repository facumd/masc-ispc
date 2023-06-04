from django.urls import path

from .views import *

urlpatterns = [
    path('list', CategoryListView.as_view(), name='category-list'),
    path('<str:slug>', CategoryDetailView.as_view(), name='category-detail'),
]
