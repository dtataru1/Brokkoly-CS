from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def hello(request):
    return render(request, "ui/hello.html")


def manual_control(request):
    return render(request, "ui/manual_control.html")

def navigation(request):
    return render(request, "ui/navigation.html")