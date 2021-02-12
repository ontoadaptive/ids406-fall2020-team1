from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PatientSerializer, MedicationSerializer, ObservationSerializer, ProjectSerializer, PatientOptionSerializer
from .models import Patient, Medication, Observation, Project, PatientOption

from .utils import database_to_csv
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.settings import api_settings
from rest_framework_csv import renderers as r

from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.renderers import BrowsableAPIRenderer


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

class ExportCSV(APIView):
    
    renderer_classes = (r.CSVRenderer, ) + tuple(api_settings.DEFAULT_RENDERER_CLASSES)
    
    def get(self, request):
        if request.method == 'GET':
            data = database_to_csv(request, Medication.objects.all())
            response = HttpResponse(data, content_type='text/csv')
            return response
        elif request.method == 'POST':
            data = database_to_csv(request, Medication.objects.filter(id__in==response.data))
            response = HttpResponse(data, content_type='text/csv')
            return response

    @classmethod
    def get_extra_actions(cls):
        return []

class ExportJSON(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, request, format = None):
        queryset = PatientOption.objects.all().values('patient_option_details')
        return Response(queryset)

    @classmethod
    def get_extra_actions(cls):
        return []

class CustomBrowsableAPIRenderer(BrowsableAPIRenderer):
    def get_default_renderer(self, view):
        return JSONRenderer()
