from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def hello(request):
    return HttpResponse("<h1>Hello Django!</h1>")


def manual_control(request):
    return HttpResponse("<h1> Drone Manual Control</h1>")
