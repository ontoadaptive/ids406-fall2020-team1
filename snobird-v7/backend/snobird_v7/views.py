from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PatientSerializer, MedicationSerializer, ObservationSerializer, ProjectSerializer
from .models import Patient, Medication, Observation, Project

# Create your views here.
class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class PatientView(viewsets.ModelViewSet):
    serializer_class = PatientSerializer
    queryset = Patient.objects.all()
    
class MedicationView(viewsets.ModelViewSet):
    serializer_class = MedicationSerializer
    queryset = Medication.objects.all()

class ObservationView(viewsets.ModelViewSet):
    serializer_class = ObservationSerializer
    queryset = Observation.objects.all()
