from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PatientSerializer, MedicationSerializer, TimelineSerializer
from .models import Patient, Medication, Timeline

# Create your views here.
class PatientView(viewsets.ModelViewSet):
    serializer_class = PatientSerializer
    queryset = Patient.objects.all()
    
class MedicationView(viewsets.ModelViewSet):
    serializer_class = MedicationSerializer
    queryset = Medication.objects.all()

class TimelineView(viewsets.ModelViewSet):
    serializer_class = TimelineSerializer
    queryset = Timeline.objects.all()