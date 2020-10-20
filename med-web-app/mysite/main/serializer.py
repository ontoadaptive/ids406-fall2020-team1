#main/serializers.py
"""
covert to json format
"""
from rest_framework import serializers
from .models import Patient, Medication

class TodoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Patient
    fields = ('patient_id', 'first_name', 'last_name')