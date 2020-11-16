from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ObservationSerializer
from .models import Observation


class TimelineView(viewsets.ModelViewSet):
    serializer_class = ObservationSerializer
    queryset = Observation.objects.all()