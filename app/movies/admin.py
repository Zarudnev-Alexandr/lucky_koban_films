from django.contrib import admin
from .models import *


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    pass


@admin.register(FilmCompany)
class FilmAdmin(admin.ModelAdmin):
    list_display = ("name", "founding_date", "location", "website")  # выводимая в админке табличка
    list_filter = ("name",)


@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "date_of_birth")
    list_filter = ("last_name",)


@admin.register(Director)
class DirectorAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "date_of_birth")
    list_filter = ("last_name",)


@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ("name", "film_company", "duration", "genre", "age_rating", "budget")
    list_filter = ("name",)


@admin.register(Serial)
class SerialAdmin(admin.ModelAdmin):
    list_display = ("name", "film_company", "genre", "age_rating")
    list_filter = ("name",)


@admin.register(SerialSeason)
class SerialSeasonAdmin(admin.ModelAdmin):
    list_display = ("serial", "number", "name", "release_date")
    list_filter = ("number",)


@admin.register(SerialEpisode)
class SerialEpisodeAdmin(admin.ModelAdmin):
    list_display = ("serial", "serial_season", "number", "name", "release_date")
    list_filter = ("number",)


@admin.register(ReviewsFilm)
class ReviewsFilmAdmin(admin.ModelAdmin):
    list_display = ("film", "user", "rating")
    list_filter = ("film", "rating",)


@admin.register(ReviewsSerialEpisode)
class ReviewsSerialEpisodeAdmin(admin.ModelAdmin):
    list_display = ("serial_episode", "user", "rating")
    list_filter = ("serial_episode", "rating",)
