from django.urls import path
from .views import PaymentView

urlpatterns = [
    path("checkout", PaymentView.as_view(), name="checkout"),
]
