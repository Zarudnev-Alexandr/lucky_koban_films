from rest_framework import viewsets
from rest_framework.generics import (ListCreateAPIView, RetrieveUpdateDestroyAPIView, )
from rest_framework.permissions import IsAuthenticated
from movies.models import UserProfile
from movies.permissions import IsOwnerProfileOrReadOnly
from .serializers import UserProfileSerializer

from movies.api.serializers import *
from movies.models import *


# class UserProfileListCreateViewSet(ListCreateAPIView):
# queryset = UserProfile.objects.all()
# serializer_class = UserProfileSerializer
# permission_classes = [IsAuthenticated]
#
# def perform_create(self, serializer):
#     user = self.request.user
#     serializer.save(user=user)


class UserProfileDetailViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    # permission_classes = [IsOwnerProfileOrReadOnly, IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        serializers.save(user=user)


class FilmCompanyViewSet(viewsets.ModelViewSet):
    queryset = FilmCompany.objects.all().order_by('name')
    serializer_class = FilmCompanySerializer
    # permission_classes = [IsAuthenticated]


class ActorViewSet(viewsets.ModelViewSet):
    queryset = Actor.objects.all().order_by('last_name')
    serializer_class = ActorSerializer
    # permission_classes = [IsAuthenticated]


class DirectorViewSet(viewsets.ModelViewSet):
    queryset = Director.objects.all().order_by('last_name')
    serializer_class = DirectorSerializer
    # permission_classes = [IsAuthenticated]


class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all().order_by('name')
    serializer_class = FilmSerializer
    # permission_classes = [IsAuthenticated]


class SerialViewSet(viewsets.ModelViewSet):
    queryset = Serial.objects.all().order_by('name')
    serializer_class = SerialSerializer
    # permission_classes = [IsAuthenticated]


class SerialSeasonViewSet(viewsets.ModelViewSet):
    queryset = SerialSeason.objects.all().order_by('name')
    serializer_class = SerialSeasonSerializer
    # permission_classes = [IsAuthenticated]


class SerialEpisodeViewSet(viewsets.ModelViewSet):
    queryset = SerialSeason.objects.all().order_by('number')
    serializer_class = SerialEpisodeSerializer
    # permission_classes = [IsAuthenticated]


class ReviewsFilmViewSet(viewsets.ModelViewSet):
    queryset = ReviewsFilm.objects.all().order_by('film')
    serializer_class = ReviewsFilmSerializer
    # permission_classes = [IsAuthenticated]


class ReviewsSerialEpisodeViewSet(viewsets.ModelViewSet):
    queryset = ReviewsSerialEpisode.objects.all().order_by('serial_episode')
    serializer_class = ReviewsSerialEpisodeSerializer
    # permission_classes = [IsAuthenticated]
