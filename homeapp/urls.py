from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.index, name='index'),
    path('blog/', views.blog, name='blog'),
    path('projects/', views.projects, name='projects'),
]

# im confused how to link other parts of my website in the HTML nav bar now
