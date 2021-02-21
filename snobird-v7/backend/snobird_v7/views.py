from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PatientSerializer, MedicationSerializer, ObservationSerializer, ProjectSerializer, PatientOptionSerializer, RegistrationSerializer
from .models import Patient, Medication, Observation, Project, PatientOption, FilesAdmin

from .utils import database_to_csv
from django.http import HttpResponse

from rest_framework.settings import api_settings
from rest_framework.views import APIView
from rest_framework_csv import renderers as r
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.renderers import BrowsableAPIRenderer
from rest_framework.decorators import api_view #functional based 
from rest_framework_csv.renderers import CSVRenderer

from .admin import MedicationResource

from django.conf import settings
import os

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

class MyView(APIView):
    renderer_classes = (CSVRenderer)

'''account and auth '''
@api_view(['POST',])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


''' using import_export plugin'''
def export_csv2(request):
    if request.method == "GET":
        data = MedicationResource().export()
        response = HttpResponse(data.csv, content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="export.csv"'
        return Response(data.csv)


'''export and import functionality'''
@api_view(['POST','GET'])
# @renderer_classes([CSVRenderer])
def export_csv(request):
    if request.method == 'GET':
        medications = database_to_csv(request, Medication.objects.all())
        response = HttpResponse(medications, content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="export.csv"'
        return response

    if request.method == "POST":
        medications = database_to_csv(request, Medication.objects.filter(id__in=request.data))
        response = HttpResponse(medications, content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="export.csv"'
        return response


def home(request):
    context={'files':FilesAdmin.objects.all()}
    return render(request, 'snobird_v7/home.html', context)

def download(request,path):
    file_path=os.path.join(settings.MEDIA_ROOT,path)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/adminupload")
            response['Content-Disposition'] = 'inline;filename='+os.path.basename(file_path)
            return response
    
    raise Http404


