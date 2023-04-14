from rest_framework import serializers
from .models import Med

class MedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Med
        fields = ('medname','sympt','name','email')

class CreateMedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Med
        fields = ('medname','sympt','name','email')