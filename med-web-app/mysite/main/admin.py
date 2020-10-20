from django.contrib import admin
from .models import Patient, Medication
# Register your models here.

#should i be making a class here?
admin.site.register(Patient)
admin.site.register(Medication)