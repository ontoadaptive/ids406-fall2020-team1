from django.contrib import admin
from .models import Patient, Medication, Observation


class PatientAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'gender')

class MedicationAdmin(admin.ModelAdmin):
    list_display = ('name','dose','days','times', 'amount', "patient")

class ObservationAdmin(admin.ModelAdmin):
    list_display = ('id', 'datetime')


# Register your models here.
admin.site.register(Patient, PatientAdmin)
admin.site.register(Medication, MedicationAdmin)
admin.site.register(Observation, ObservationAdmin)