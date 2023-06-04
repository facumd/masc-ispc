from django.db import models
import uuid

from utils.model_abstracts import Model


# Create your models here.


class Category(Model):

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=255, unique=True, default=uuid.uuid4)
    description = models.TextField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
