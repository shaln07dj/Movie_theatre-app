from django.urls import path

from movietheatre.views import movie_views as views


urlpatterns=[
    

     path('', views.GetMovies.as_view()),

     path('create/',views.CreateMovies.as_view()),
   
     path('<str:pk>/', views.GetMovies.as_view()),
]