from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def setup(request):
    return render(request, "ui/setup.html")

def manual_control(request):
    return render(request, "ui/manual_control.html")

def navigation(request):
    return render(request, "ui/navigation.html")

def drone_info(request):
    return render(request, "ui/drone_info.html")

def documentation(request):
    return render(request, "ui/documentation.html")