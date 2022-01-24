
from ctypes import cast
from django.http import response
from django.shortcuts import render
from rest_framework.views import APIView
from cast.models import Cast
from rest_framework.response import Response
from cast.serializers import CastSerializer

# Create your views here.

class GetCasts(APIView):
    def get(self,request):
        casts=Cast.objects.all()
        response=CastSerializer(casts,many=True)
        return Response (response.data)

class CreateCast(APIView):
    def post(self,request):
        cast_request=request.data
        cast_data=CastSerializer(cast_request)
        if(cast_data.is_valid()):
            cast_data.save()
            return Response({
                'msg':'recived'
            })
        else:
            return Response({
                'error':cast_data.errors
            })

class GetCast(APIView):
    def get(self,request,pk):
        cast=Cast.objects.get(id=pk)
        response=CastSerializer(cast,many=False)
        return Response(response.data)
