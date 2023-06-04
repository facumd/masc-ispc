from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.CreateUserView.as_view(), name='sign_up'),
    path('login', views.LoginView.as_view(), name='log_in')
]
