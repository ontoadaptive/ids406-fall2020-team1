import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
import django
from django.db.models import Max, Min, Avg
django.setup()

from django.utils import timezone
from datetime import datetime

from snobird_v7.models import Observation

def delete_observations():
    Observation.objects.all().delete()

def create_observations(date_time, name, value, unit):
    o = Observation(datetime = date_time, patient = name, value = value, unit = unit, type_cd = type_cd(value))
    o.save()

def type_cd(heart_rate):
    if heart_rate >= 140:
        return 3 
    elif heart_rate < 140 and heart_rate >= 120: 
        return 2
    elif heart_rate < 120:
        return 1
    else:
        print('invaild bp_value:', heart_rate)
        pass

def summary(Observation):
    max_val = Observation.objects.aggregate(max_bp = Max('value'))
    min_val = Observation.objects.aggregate(lowest_bp = Min('value'))
    avg_val = Observation.objects.all().aggregate(Avg('value'))