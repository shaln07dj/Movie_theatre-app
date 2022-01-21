from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from movietheatre.models import Reviews
from rest_framework.response import Response
from movietheatre.serializers import ReviewSerializers

class GetReviews(APIView):
    def get(self):
        reviews=Reviews.objects.all()
        response=ReviewSerializers(reviews,many=True)
        return Response(response.data)

class CreateReviews(APIView):
    permission_classes = [IsAuthenticated]
    def post(self,request):
        review_request=request.data
        review_data=ReviewSerializers(review_request,many=True)
        if(review_data.is_valid()):
            review_data.save()
            return Response({
                
                'msg':'recived'
            })
        else:
            return Response({
                'error':'product_data.errors'
            })



    


