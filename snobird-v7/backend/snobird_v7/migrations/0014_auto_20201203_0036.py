# Generated by Django 3.1.3 on 2020-12-03 06:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snobird_v7', '0013_auto_20201202_2251'),
    ]

    operations = [
        migrations.RenameField(
            model_name='observation',
            old_name='heart_rate',
            new_name='value',
        ),
    ]
