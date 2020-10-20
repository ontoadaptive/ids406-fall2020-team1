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

    birth_date = models.DateField(null = True) #doesn't show up 

    def __str__(self):
        return self.first_name

class Medication(models.Model):
    FORM_CHOICES = (
        ('Form', 'Form' ),
        ('Tablet', 'Tablet'),
        ('Powder', 'Powder'),
        ('Capsule', 'Capsule')
        )

    identifier =  models.AutoField(primary_key = True) 
    name = models.CharField(max_length = 200, null = True )
    expiration_date =  models.DateField(null = True)
    form =  models.CharField(max_length = 10, null = True, choices=FORM_CHOICES)
    amount = models.CharField(max_length = 20, null = True) # how many of form do we have?
    #add dosage per form? what is the proper term
    
    patient = models.ManyToManyField(Patient)
    
    def __str__(self):
        return self.name
    