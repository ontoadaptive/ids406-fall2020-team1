from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PatientSerializer, MedicationSerializer, ObservationSerializer, ProjectSerializer, PatientOptionSerializer
from .models import Patient, Medication, Observation, Project, PatientOption

import csv
from django.http import HttpResponse
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

class PatientOptionView(viewsets.ModelViewSet):
    serializer_class = PatientOptionSerializer
    queryset = PatientOption.objects.all()



def database_to_csv(request, queryset):
    model = queryset.model #returns an object
    model_fields = model._meta.fields + model._meta.many_to_many
    field_names = [field.name for field in model_fields]

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="export.csv"'


    writer = csv.writer(response, delimiter=",")

    writer.writerow(field_names)

    for row in queryset:
        values = []
        for field in field_names:
            value = getattr(row, field)
            if callable(value):
                try:
                    value = value() or ''
                except:
                    value = 'Error retrieving value'
            if value is None:
                value = ''
            values.append(value)
        writer.writerow(values)
    return response

def export_csv(request):

  data = database_to_csv(request, Medication.objects.all())
  response = HttpResponse(data, content_type='text/csv')
  return response

  