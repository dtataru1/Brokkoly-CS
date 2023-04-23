from django.db import models

# Create your models here.
class Drone(models.Model):
    name = models.fields.CharField(max_length=50)
    pos_x = 0.0
    pos_y = 0.0
    