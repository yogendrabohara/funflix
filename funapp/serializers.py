from rest_framework import serializers
from .models import Movies
from django.contrib.auth.models import User
from rest_framework.validators import UniqueTogetherValidator


# Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types.
# Serializers also provide deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.
# Validatio is performed entirely on the serializer class

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User

        fields = ['username', 'email', 'password']
    # overiding the default create method for serializers

    def create(self, validated_data):
        user = User()
        user.username = validated_data['username']
        user.email = validated_data['email']
        user.set_password(validated_data['password'])
        user.save()
        return user


class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ['id', 'name', 'description',
                  'created_at', 'category_id', 'image_path']
