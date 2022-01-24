from django.urls import path

from movietheatre.views import movie_cast_views as views


urlpatterns=[
    

     path('', views.GetMovieCasts.as_view()),

     path('create/',views.CreateMovieCasts.as_view()),
   
     path('<str:pk>/', views.GetMovieCast.as_view()),
]