from django.db import models
from utils.model_abstracts import Model
from django.contrib.auth.models import User as Usuario

# Create your models here.


def imagen_directory(instance, filename):
    return 'producto/{0}/{1}'.format(instance.titulo, filename)

class Categoria(Model):

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
    
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nombre

class Subcategoria(Model):

    class Meta:
        verbose_name = 'Subcategoria'
        verbose_name_plural = 'Subcategorias'
    
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, blank=False, null=False)

    def __str__(self):
        return self.nombre

class Producto(Model):

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
    
    titulo = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(max_length=255, blank=True, null=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=0.99)
    stock = models.IntegerField(default=1)
    imagen = models.ImageField(upload_to=imagen_directory, max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, blank=False, null=False)

    subcategoria = models.ForeignKey(Subcategoria, on_delete=models.CASCADE, blank=False, null=False)

    def __str__(self):
        return self.nombre
