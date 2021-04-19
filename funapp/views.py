from .models import Movies
from .serializers import UserSerializer, MoviesSerializer
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


# repeated logic can be combined into a single class ie queryset need to specify once, then it'll be used across multiple views


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    # list , create, retrieve, update, partial_update, destroy
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class MoviesViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer
    permission_classes = [IsAuthenticated]
