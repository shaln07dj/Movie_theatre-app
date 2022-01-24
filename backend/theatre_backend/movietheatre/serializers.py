from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from django.contrib.auth.models import User
from movietheatre.models import Movies, MovieCast, Reviews
from cast.serializers import CastSerializer
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

class MovieCastSerializers(serializers.ModelSerializer):
    user_details=UserSerializer(source='user',read_only=True,many=False)
    movie_cast_detail1=CastSerializer(source=('first'),read_only=True,many=False)
    movie_cast_detail2=CastSerializer(source=('second'),read_only=True,many=False)
    movie_cast_detail3=CastSerializer(source=('third'),read_only=True,many=False)
    movie_cast_detail4=CastSerializer(source=('fourth'),read_only=True,many=False)
    movie_cast_detail5=CastSerializer(source=('fifth'),read_only=True,many=False)
    movie_cast_detail6=CastSerializer(source=('sixth'),read_only=True,many=False)
    movie_cast_detail7=CastSerializer(source=('seventh'),read_only=True,many=False)
    movie_cast_detail8=CastSerializer(source=('eigth'),read_only=True,many=False)
    movie_cast_detail9=CastSerializer(source=('ninth'),read_only=True,many=False)
    movie_cast_detail10=CastSerializer(source=('tenth'),read_only=True,many=False)    
   
    class Meta:
        model=MovieCast
        fields='__all__'
        extra_kwargs={
            'user':{'write_only':True},
            'first':{'write_only':True},
            'second':{'write_only':True}
        }

class MovieSerializers(serializers.ModelSerializer):
    user_details=UserSerializer(source='user',read_only=True,many=False)
    # movie_cast_details=CastSerializer(source='cast',read_only=True,many=False)
    cast_details=MovieCastSerializers(source='cast',read_only=True,many=False)
   
    class Meta:
        model=Movies
        fields='__all__'
        extra_kwargs={
            'user':{'write_only':True},
            'cast':{'write_only':True}
        }



class ReviewSerializers(serializers.ModelSerializer):

   
    class Meta:
        model=Reviews
        fields='__all__'


