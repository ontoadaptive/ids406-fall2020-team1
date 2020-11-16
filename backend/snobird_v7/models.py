from django.db import models
import datetime

# NAA.
# - https://www.geeksforgeeks.org/datetimefield-django-models/


class Observation(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=120)
    time_stamp = models.DateTimeField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("name", "time_stamp")