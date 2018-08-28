from django.db import models

# Create your models here.
class homeapp(models.Model):
    title = models.CharField(max_length = 60)
    permalink = models.CharField(max_length = 100, unique = True)
    update_date = models.DateTimeField('Last Updated')
    bodytext = models.TextField('Page Content', blank = True)
