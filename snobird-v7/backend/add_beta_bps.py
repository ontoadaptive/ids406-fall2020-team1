import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
import django
django.setup()

from django.utils import timezone
from datetime import datetime

from snobird_v7.models import Timeline

def delete_observations():
    Timeline.objects.all().delete()

def create_observations(date_time, name, heart_rate, unit):
    o = Timeline(datetime = date_time, patient = name, heart_rate = heart_rate, unit = unit)
    o.save()