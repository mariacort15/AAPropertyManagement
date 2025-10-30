from django.db import models

# Create your models here.
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    message = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(default=5)

    def __str__(self):
        return f"{self.name} ({self.date_posted.date()})"