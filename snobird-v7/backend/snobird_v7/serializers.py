#main/serializers.py

from rest_framework import serializers
from .models import Patient, Medication, Observation

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('first_name', 'last_name', 'gender')

class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ('id', 'name', 'dose', 'days', 'times', 'amount', 'patient')
        
class ObservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Observation
        fields = ('id','datetime','patient', 'heart_rate', 'unit')