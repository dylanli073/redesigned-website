from django.http import HttpResponse
from django.shortcuts import render
import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Create your views here.
def index(request):
    # if request.method == "POST":
    #     message = request.POST.get('message')
    #     recipient = "dylanlix@gmail.com"
    #     sender = "li_dylan@college.harvard.edu"
    #     msg = MIMEMultipart('alternative')
    #     msg['Subject'] = "Communication from Website"
    #     msg['From'] = sender
    #     msg['To'] = recipient
    #     print("hello world")

    #     # CORRECT THIS SECTION HERE -->
    #     msg.attach(MIMEText(message, 'plain'))
    #     s = smtplib.SMTP('587')
    #     s.sendmail(sender, recipient, msg.as_string())
    #     s.quit()
    #     # <--
        
    #     print("hello world2")
    # else:
    return render(request, 'index.html')

def blog(request):
    return render(request, 'blog.html') 

def projects(request):
    return render(request, 'projects.html')

# def mailForm(request):
# 	form_class = ContactForm

# 	return render(request, 'mailForm.php')