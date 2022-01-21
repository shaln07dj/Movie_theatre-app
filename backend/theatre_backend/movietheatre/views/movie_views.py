
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAdminUser
from movietheatre.models import Movies
from movietheatre.serializers import MovieSerializers

from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

#from resturantdata import Product, Review


from rest_framework import status

class GetMovies(APIView):
    def get(self,request):
        movies=Movies.objects.all()
        response=MovieSerializers(movies,many=True)
        return Response(response.data)


class CreateMovies(APIView):
    permission_classes = [IsAdminUser]

    def post(self,request):
        movie_request=request.data
        movie_data=MovieSerializers(data=movie_request)
        if(movie_data.is_valid()):
            movie_data.save()
            return Response({
                
                'msg':'recived'
            })
        else:
            return Response({
                'error':'product_data.errors'
            })
            

        
class GetMovie(APIView):
    def get(self,reequest,pk):
        movie=Movies.objects.get(id=pk)
        response=MovieSerializers(movie,many=False)
        return Response(response.data)