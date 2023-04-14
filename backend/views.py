from django.shortcuts import render
from rest_framework import generics, status
from .serializers import MedSerializer, CreateMedSerializer
from .models import Med
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.


class MedView(generics.ListAPIView):
    queryset = Med.objects.all()
    serializer_class = MedSerializer

    def get(self, request, format=None):
        meds = Med.objects.all()
        serializer = CreateMedSerializer(meds, many=True)
        return Response(serializer.data)

class CreateMedView(APIView):
    serializer_class = CreateMedSerializer


    def get(self, request, format=None):
        meds = Med.objects.all()
        serializer = CreateMedSerializer(meds, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
       serializer =MedSerializer(data=request.data)

       if serializer.is_valid():
            serializer.save()
            
           
            return Response(serializer.data, status=status.HTTP_201_CREATED)
       return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            
    
   
