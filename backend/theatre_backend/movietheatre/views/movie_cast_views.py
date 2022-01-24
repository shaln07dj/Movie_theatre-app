from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAdminUser
from movietheatre.models import MovieCast
from movietheatre.serializers import MovieCastSerializers

from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

#from resturantdata import Product, Review


from rest_framework import status

class GetMovieCasts(APIView):
    def get(self,request):
        movies=MovieCast.objects.all()
        response=MovieCastSerializers(movies,many=True)
        return Response(response.data)


class CreateMovieCasts(APIView):
    permission_classes = [IsAdminUser]

    def post(self,request):
        movie_request=request.data
        movie_data=MovieCastSerializers(data=movie_request)
        if(movie_data.is_valid()):
            movie_data.save()
            return Response({
                
                'msg':'recived'
            })
        else:
            return Response({
                'error':movie_data.errors
            })
            

        
class GetMovieCast(APIView):
    def get(self,request,pk):
        movie=MovieCast.objects.get(id=pk)
        response=MovieCastSerializers(movie,many=False)
        return Response(response.data)