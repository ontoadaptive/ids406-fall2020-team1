# Generated by Django 3.1.6 on 2021-02-03 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snobird_v7', '0020_patientoption'),
    ]

    operations = [
        migrations.AddField(
            model_name='patientoption',
            name='patient_option_details',
            field=models.JSONField(default='{}'),
        ),
    ]