# Generated by Django 3.1.2 on 2020-10-22 02:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('patient_id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=20, null=True)),
                ('last_name', models.CharField(max_length=20, null=True)),
                ('phone_number', models.CharField(max_length=10, null=True)),
                ('gender', models.CharField(choices=[('M', 'M'), ('F', 'F')], max_length=1, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Patitent',
        ),
    ]