from rest_framework import serializers
from cast.models import  Cast
from django.contrib.auth.models import User

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


class CastSerializer(serializers.ModelSerializer):
    user_details=UserSerializer(source='user',read_only=True,many=False)
    class Meta:

        model=Cast
        fields='__all__'
        extra_kwargs={
            'user':{'write_only':True}
        }


