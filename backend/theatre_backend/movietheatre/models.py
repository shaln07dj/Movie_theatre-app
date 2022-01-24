from msilib import CAB
from statistics import mode
from django.db import models
from django.contrib.auth.models import User

from cast.models import Cast

# Create your models here.
class MovieCast(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    movie=models.TextField()
    first=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='MovieCast')
    second=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='sec')
    third=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='thir')
    forth=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='four')
    fifth=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='five')    
    sixth=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='six')
    seventh=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='seven')
    eighth=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='eight')
    ninth=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='nine')
    tenth=models.ForeignKey(Cast,on_delete=models.SET_NULL,null=True,blank=True,related_name='ten')

    def __str__(self):
        return(self.movie)
    
class Movies(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    cast=models.ForeignKey(MovieCast,on_delete=models.SET_NULL,null=True,blank=True)
    name=models.CharField(max_length=50)
    discription=models.TextField(null=True,blank=True)
    img=models.URLField()
    image=models.ImageField(null=True,blank=True)
    category=models.CharField(max_length=50,blank=True)
    rating=models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    numReviews=models.IntegerField(null=True,blank=True,default=0)
    price=models.IntegerField(null=True,blank=True)
    createdAt=models.DateTimeField(auto_now_add=True)
    id=models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return (self.name)


    


class Reviews(models.Model):
    movie=models.ForeignKey(Movies,on_delete=models.SET_NULL,null=True)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name=models.CharField(max_length=200,null=True,blank=True)
    rating=models.IntegerField(null=True,blank=True)
    comment=models.TextField(null=True,blank=True)
    id=models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.rating)

