from django.urls import path

from cast import views

urlpatterns=[
    path('',views.GetCasts.as_view()),
    path('create/',views.CreateCast.as_view()),
    path('<str:pk>/',views.GetCast.as_view())
]
