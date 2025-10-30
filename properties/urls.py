from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'properties', views.PropertyViewSet, basename='property')

urlpatterns = [
    path('', include(router.urls)), 
    path('list/', views.property_list, name='property_list'),
    path('properties/<int:pk>/', views.property_detail, name='property_detail'),
]