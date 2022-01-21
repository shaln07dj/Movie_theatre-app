from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from django.contrib.auth.models import User
from movietheatre.models import Movies, Reviews
from rest_framework_simplejwt.tokens import RefreshToken



class UserSerializer(serializers.ModelSerializer):
    name=serializers.SerializerMethodField(read_only=True)
    id=serializers.SerializerMethodField(read_only=True)
    isAdmin=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model=User
        fields=['id','name','username','email','isAdmin']
    
    def get_id(self,obj):
        return obj.id
    
     
    def get_isAdmin(self,obj):
        return obj.is_staff

    def get_name(self,obj):
        name=obj.first_name
        if name=='':
            name=obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['id','name','username','email','isAdmin','token']

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token)


class MovieSerializers(serializers.ModelSerializer):

   
    class Meta:
        model=Movies
        fields='__all__'


class ReviewSerializers(serializers.ModelSerializer):

   
    class Meta:
        model=Reviews
        fields='__all__'