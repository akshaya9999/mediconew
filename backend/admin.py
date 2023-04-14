from django.contrib import admin
from .models import Med
# Register your models here.

class MednameDis(admin.ModelAdmin):
    list_display= ('medname','sympt','name','email')

admin.site.register(Med,MednameDis)