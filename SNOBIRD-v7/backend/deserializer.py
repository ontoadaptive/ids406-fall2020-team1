from django.core import serializers

data = "output.json"
for output in serializers.deserialize("json", data):
    output.save()