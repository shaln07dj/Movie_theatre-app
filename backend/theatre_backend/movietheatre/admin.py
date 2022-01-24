from django.contrib import admin
from movietheatre.models import *
from cast.models import Cast

# Register your models here.
admin.site.register(Movies)
admin.site.register(Reviews)
admin.site.register(Cast)
admin.site.register(MovieCast)
