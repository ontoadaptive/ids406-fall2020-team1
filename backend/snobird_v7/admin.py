from django.contrib import admin
from .models import Observation


class ObservationAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "time_stamp")


admin.site.register(Observation, ObservationAdmin)
