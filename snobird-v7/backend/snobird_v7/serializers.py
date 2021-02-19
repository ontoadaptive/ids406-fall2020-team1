#main/serializers.py

from rest_framework import serializers
from .models import Patient, Medication, Observation, Project, PatientOption
from django.db import models
from django.contrib.auth.models import User

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name')
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('name', 'address')

class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ('id', 'name', 'dose', 'days', 'times', 'amount', 'patient')
        
class ObservationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Observation
        fields = ('id','datetime','patient', 'value', 'unit', 'type_cd')

class PatientOptionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PatientOption
        fields = ('patient_key', 'patient_option_name', 'patient_option_details')

class RegistrationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('username', 'email', 'password')