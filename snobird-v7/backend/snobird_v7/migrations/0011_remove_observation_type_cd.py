# Generated by Django 3.1.3 on 2020-12-03 04:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snobird_v7', '0010_observation_type_cd'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='observation',
            name='type_cd',
        ),
    ]
