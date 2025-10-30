from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path
from . import views

urlpatterns = [
    # Admin Panel
    path('admin/', admin.site.urls),

    # JWT Authentication Endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Property API Routes (from properties/urls.py)
    path('api/', include('properties.urls')),

    path('api/', include('contact.urls')), #Contact App

    # User Authentication Routes
    path('api/users/', include('users.urls')),
    path('api/auth/', include('users.urls')),  # optional alias if you want /api/auth/

    # Simple Homepage
    path('', lambda request: HttpResponse("AA Property Management")),
    path('register/', views.register_user),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)