from django.db import models

# Create your models here.
class Patient(models.Model):
    patient_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=20, null = True)
    address = models.CharField(max_length=20, null = True)

    def __str__(self):
        return self.name

class Medication(models.Model):
    patient = models.ForeignKey(Patient, null = True, on_delete=models.CASCADE)
    name = models.CharField(max_length=20, null = True)
    dose = models.CharField(max_length=20, null = True)
    days = models.CharField(max_length=20, null = True)
    times = models.CharField(max_length=20, null = True) 
    amount = models.CharField(max_length=20, null = True) 
    
    def __str__(self):
        return self.name

class Observation(models.Model):
    patient_key = models.ForeignKey(Patient, null = True, on_delete=models.CASCADE)    
    datetime = models.DateTimeField(null = True)
    patient = models.CharField(max_length=20, null = True)
    value = models.FloatField(max_length=20, null = True)
    unit = models.CharField(max_length=20, null = True)
    type_cd = models.IntegerField(null=True)