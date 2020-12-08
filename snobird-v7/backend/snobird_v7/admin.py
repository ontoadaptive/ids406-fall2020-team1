from django.contrib import admin
from .models import Patient, Medication, Observation


class PatientAdmin(admin.ModelAdmin):
    list_display = ('name', 'address')

class MedicationAdmin(admin.ModelAdmin):
    list_display = ('name','dose','days','times', 'amount', "patient")

class ObservationAdmin(admin.ModelAdmin):
    list_display = ('datetime', 'patient', 'value', 'unit', 'type_cd')


# Register your models here.
admin.site.register(Patient, PatientAdmin)
admin.site.register(Medication, MedicationAdmin)
admin.site.register(Observation, ObservationAdmin)