from pyexpat import model
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Cast(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name=models.CharField(max_length=50)
    img=models.URLField()
    image=models.ImageField(null=True,blank=True)

    def __str__(self):
        return(self.name)