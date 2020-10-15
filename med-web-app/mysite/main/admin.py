from django.contrib import admin
from .models import Patient, Medication
# Register your models here.
admin.site.register(Patient)
admin.site.register(Medication)