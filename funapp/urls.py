from django.urls import path, include
from funapp import views
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers


# by using routers, we no longer need to deal with wiring up the URL conf ourselves.

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'movies', views.MoviesViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login', obtain_auth_token, name='login'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

# for url in router.urls:
#     print(url, '\n')
