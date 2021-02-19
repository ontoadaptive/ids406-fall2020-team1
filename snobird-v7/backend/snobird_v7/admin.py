from django.contrib import admin
from .models import Patient, Medication, Observation, Project, PatientOption

from import_export import resources

class ProjectAdmin(admin.ModelAdmin):
    name = ['name']

class PatientAdmin(admin.ModelAdmin):
    list_display = ('name', 'address')

class MedicationAdmin(admin.ModelAdmin):
    list_display = ('name','dose','days','times', 'amount', "patient")

class ObservationAdmin(admin.ModelAdmin):
    list_display = ('datetime', 'patient', 'value', 'unit', 'type_cd')

class PatientOptionAdmin(admin.ModelAdmin):
    list_display = ('patient_option_name', 'patient_option_details')

# Register your models here.
admin.site.register(Project, ProjectAdmin)
admin.site.register(Patient, PatientAdmin)
admin.site.register(Medication, MedicationAdmin)
admin.site.register(Observation, ObservationAdmin)
admin.site.register(PatientOption, PatientOptionAdmin)

'''import_export'''
class MedicationResource(resources.ModelResource):

    class Meta:
        model = Medication