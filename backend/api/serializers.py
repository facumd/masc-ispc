from rest_framework import serializers
from .models import *


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id', 'nombre', 'descripcion', 'created_at', 'updated_at')

class SubcategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategoria
        fields = ('id', 'nombre', 'descripcion', 'created_at', 'updated_at', 'categoria')

class ProductoSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Producto
        fields = (
            'id',
            'titulo',
            'descripcion',
            'precio',
            'stock',
            'imagen',
            'created_at',
            'updated_at',
            'usuario',
            'subcategoria',
        )
