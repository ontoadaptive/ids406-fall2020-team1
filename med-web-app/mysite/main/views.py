from django.shortcuts import render
from django.http import HttpResponse #no longer needed?
from rest_framework import viewsets
from .serializer import TodoSerializer
from .models import Patient, Medication
# Create your views here.
# def homepage(request):
#     return HttpResponse("hello <strong>Ontoadaptive Team</strong>")

class MainView(viewsets.ModelsViewSet):
    serializer_class = TodoSerializer
    queryset = Patient.objects.all()