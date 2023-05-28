from django.urls import re_path
from .views import *


urlpatterns = [
    re_path(r'categorias$', ListaCategoria.as_view()),
    re_path(r'categoria/(?P<pk>[0-9\-]+)$', DetalleCategoria.as_view()),
    re_path(r'subcategorias$', ListaSubcategoriaView.as_view()),
    re_path(r'productos$', ListaProductoView.as_view()),
]

