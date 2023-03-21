from django.urls import include, path
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from . import views

router = routers.DefaultRouter()
router.register(r'UserProfiles', views.UserProfileDetailViewSet)
router.register(r'FilmCompanys', views.FilmCompanyViewSet)
router.register(r'Actors', views.ActorViewSet)
router.register(r'Directors', views.DirectorViewSet)
router.register(r'Films', views.FilmViewSet)
router.register(r'Serials', views.SerialViewSet)
router.register(r'SerialSeasons', views.SerialSeasonViewSet)
router.register(r'SerialEpisods', views.SerialEpisodeViewSet)
router.register(r'ReviewsFilm', views.ReviewsFilmViewSet)
router.register(r'ReviewsSerialEpisode', views.ReviewsSerialEpisodeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

] \
    # + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
