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
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=5)

    gender = models.CharField(
        max_length=1,
        choices = GENDER_CHOICES
    )
    birth_date = models.DateField()

class Medication(models.Model):
    POWDER = 'P'
    TABLETS = 'T'
    CAPSULES = 'C'

    FORM_CHOICES  = ((POWDER, 'P'), (TABLETS, 'T'), (CAPSULES, 'C'))

    identifier =  models.AutoField(primary_key = True) #should we do it this way 
    expiration_date =  models.DateField()
    #code =
    form =  models.CharField(
        max_length = 1,
        choices = FORM_CHOICES
    )
    amount = models.CharField(max_length = 3) # how many of form do we have?
    
    patient = models.ForeignKey(Patient, on_delete = models.CASCADE ) #what is models.CASCADE
    