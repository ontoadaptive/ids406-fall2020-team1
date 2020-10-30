#main/serializers.py

from rest_framework import serializers
from .models import Patient, Medication, Timeline

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('first_name', 'last_name', 'gender')

class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ('id', 'name', 'dose', 'days', 'times', 'amount', 'patient')
        
class TimelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Timeline
        fields = ('id','datetime','patient')