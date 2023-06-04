from django.db import models
import uuid

from utils.model_abstracts import Model
from apps.category.models import Category

# Create your models here.


class Subcategory(Model):

    class Meta:
        verbose_name = 'Subcategory'
        verbose_name_plural = 'Subcategories'

    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=255, unique=True, default=uuid.uuid4)
    description = models.TextField(max_length=255, blank=True, null=True)
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
