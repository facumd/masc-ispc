from django.db import models
import uuid

from utils.model_abstracts import Model
from apps.subcategory.models import Subcategory
from apps.user.models import UserAccount

# Create your models here.


def upload_location(instance, filename):
    filebase, extension = filename.split('.')
    return 'products/%s.%s' % (instance.slug, extension)


class Product(Model):

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    title = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=255, unique=True, default=uuid.uuid4)
    description = models.TextField(max_length=255, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.99)
    stock = models.IntegerField(default=1)
    image_link = models.CharField(max_length=255, blank=True, null=True)
    image_file = models.ImageField(
        upload_to=upload_location, blank=True, null=True)
    subcategory = models.ForeignKey(
        Subcategory, on_delete=models.CASCADE, blank=True, null=True)
    created_by = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
