from django.db import models
from django.forms import ModelForm
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
# Create your models here.


class Movies(models.Model):

    name = models.CharField(max_length=180)
    # link = models.CharField(max_length=255)
    description = models.CharField(max_length=180)
    created_at = models.DateTimeField(auto_now_add=True)
    category_id = models.SmallIntegerField(choices=((0, "continue watching"), (1, "My List"), (2, "Romantic Movies"), (
        3, "Trending Now"), (4, "Asian TV Drama"), (5, "Netflix Originals"), (6, "Hindi Movies"), (7, "Action Movies"),))
    image_path = models.URLField()


# class Viewers(models.Model):
#     name = models.CharField(max_length=180)
#     email = models.EmailField(max_length=180)
#     password = models.CharField(max_length=180)
#     created_at = models.DateTimeField()

# check this part
# every user should always have a token , following code signal to create token automatically for every users.
# # This code is triggered whenever a new user has been created and saved to the database
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
