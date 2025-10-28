from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions
from .models import Property
from .serializers import PropertySerializer

class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.AllowAny]
    http_method_names = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']

    def get_queryset(self):
        return Property.objects.all()

def property_list(request):
    properties = Property.objects.all()
    return render(request, 'properties/property_list.html', {'properties': properties})

def property_detail(request, pk):
    prop = get_object_or_404(Property, pk=pk)
    return render(request, 'properties/property_detail.html', {'property': prop})