from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status

@api_view(['POST'])
def register_user(request):
    data = request.data
    if data['password'] != data['confirm_password']:
        return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create_user(
        username=data['username'],
        email=data['email'],
        password=data['password'],
        first_name=data['first_name'],
        last_name=data['last_name']
    )
    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)