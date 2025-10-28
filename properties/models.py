from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()

class Property(models.Model):
    STATUS = [("Available", "Available"), ("Occupied", "Occupied")]
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    title = models.CharField(max_length=120)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=50, default="California")
    zip_code = models.CharField(max_length=10, blank=True, null=True)
    rent = models.DecimalField(max_digits=9, decimal_places=2)
    bedrooms = models.IntegerField(default=1)
    bathrooms = models.DecimalField(max_digits=3, decimal_places=1, default=1.0)
    status = models.CharField(max_length=20, choices=STATUS, default="Available")
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)
    image = models.ImageField(upload_to="property_images/", default="property_images/default.jpg", blank=True, null=True)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
