from django.db import models

# Create your models here.
class TenantResource(models.Model):
    tenant_name = models.CharField(max_length=100)
    unit_number = models.CharField(max_length=50)
    lease_start = models.DateField()
    lease_end = models.DateField()
    rent_amount = models.DecimalField(max_digits=8, decimal_places=2)
    email = models.EmailField()

    def __str__(self):
        return f"{self.tenant_name} - Unit {self.unit_number}"