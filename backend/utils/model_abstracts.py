import uuid
from django.db import models


class Model(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          editable=False, unique=True, max_length=36)

    class Meta:
        abstract = True
