from django.contrib import admin
from .models import Patient


class PatientAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'gender')

# Register your models here.
admin.site.register(Patient, PatientAdmin)