from django.db import models

class Users(models.Model):
    medname = models.CharField(max_length=200)
    sympt = models.TextField()
    name = models.CharField(max_length=50,unique=True)
    email = models.CharField(max_length=200)

    def __str__(self):
            return self.medname