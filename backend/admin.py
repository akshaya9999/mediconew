from django.contrib import admin
from .models import Users
# Register your models here.

class UsernameDis(admin.ModelAdmin):
    list_display= ('medname','sympt','name','email')

admin.site.register(Users,UsernameDis)