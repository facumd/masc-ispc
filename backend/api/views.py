from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from .models import *
from .serializers import *

# Create your views here.


class ListaCategoria(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class DetalleCategoria(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class ListaSubcategoriaView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):
        queryset = Subcategoria.objects.all().select_related('categoria')
        if Subcategoria.objects.all().exists():

            resultado = []

            for query in queryset:
                item = {}
                item['id'] = query.id
                item['nombre'] = query.nombre
                item['descripcion'] = query.descripcion
                item['created_at'] = query.created_at
                item['updated_at'] = query.updated_at
                item['categoria'] = [query.categoria.id,
                                    query.categoria.nombre, query.categoria.descripcion]

                resultado.append(item)

            return Response({'subcategorias': resultado}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No hay subcategorias registradas'}, status=status.HTTP_204_NO_CONTENT)

class ListaProductoView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):
        queryset = Producto.objects.all().select_related('subcategoria')
        if Producto.objects.all().exists():

            resultado = []

            for query in queryset:
                item = {}
                item['id'] = query.id
                item['titulo'] = query.titulo
                item['descripcion'] = query.descripcion
                item['precio'] = query.precio
                item['stock'] = query.stock
                item['imagen'] = query.imagen
                item['created_at'] = query.created_at
                item['updated_at'] = query.updated_at
                item['usuario'] = [query.usuario.username]
                item['subcategoria'] = [query.subcategoria.id,
                                        query.subcategoria.nombre, query.subcategoria.descripcion]

                resultado.append(item)

            return Response({'productos': resultado}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No hay subcategorias registradas'}, status=status.HTTP_204_NO_CONTENT)
