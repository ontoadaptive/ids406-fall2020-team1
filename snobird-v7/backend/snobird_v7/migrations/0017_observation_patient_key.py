# Generated by Django 3.1.3 on 2020-12-04 06:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('snobird_v7', '0016_auto_20201204_0015'),
    ]

    operations = [
        migrations.AddField(
            model_name='observation',
            name='patient_key',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='snobird_v7.patient'),
        ),
    ]
