from rest_framework import serializers
from movies.models import *


class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)#Нельзя так легко создать профиль

    class Meta:
        model = UserProfile
        fields = '__all__'


class FilmCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = FilmCompany
        fields = (
            "name", "founding_date", "location", "website"
        )


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = (
            "first_name", "last_name", "date_of_birth"
        )


class DirectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields = (
            "first_name", "last_name", "date_of_birth"
        )


class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = (
            "film_company", "name", "duration", "actors", "actors", "directors", "genre", "age_rating", "release_date",
            "budget", "fees_in_russia", "fees_in_the_world"
        )


class SerialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serial
        fields = (
            "film_company", "name", "genre", "age_rating",
        )


class SerialSeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = SerialSeason
        fields = (
            "serial", "number", "name", "release_date", "budget", "fees_in_russia", "fees_in_the_world"
        )


class SerialEpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SerialEpisode
        fields = (
            "serial", "serial_season", "number", "name", "release_date", "actors", "directors"
        )


class ReviewsFilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewsFilm
        fields = (
            "film", "user", "rating", "review_text"
        )


class ReviewsSerialEpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewsSerialEpisode
        fields = (
            "serial_episode", "user", "rating", "review_text"
        )
