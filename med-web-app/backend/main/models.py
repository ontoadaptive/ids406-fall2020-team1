from django.db import models

# Create your models here.
class Patient(models.Model):
    MALE = 'M'
    FEMALE = 'F'

    GENDER_CHOICES = (
        (MALE, 'M'), 
        (FEMALE, 'F'),
        )

    patient_id = models.AutoField(primary_key = True)   
    first_name = models.CharField(max_length=20, null = True)
    last_name = models.CharField(max_length=20, null = True)
    phone_number = models.CharField(max_length=10, null = True) #773 444 9999

    gender = models.CharField(
        max_length=1,
        null = True,
        choices = GENDER_CHOICES
        )

    #birth_date = models.DateField(null = True) #doesn't show up 

    def __str__(self):
        return self.first_name

class Medication(models.Model):

    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=20, null = True)
    dose = models.CharField(max_length=20, null = True)
    days = models.CharField(max_length=20, null = True)
    times = models.CharField(max_length=20, null = True)
    amount = models.CharField(max_length=20, null = True)

    patient = models.ForeignKey('patient', on_delete=models.CASCADE)
    #
    def __str__(self):
        return self.name