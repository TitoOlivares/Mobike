from django.shortcuts import render, redirect
from .forms import CustomUserForm
from django.contrib.auth import login,authenticate

# Create your views here.

def home(request):
    return render(request, 'core/home.html')

def puntos(request):
    return render(request, 'core/puntos.html')

def registro_usuario(request):
    data = {
        'form':CustomUserForm()
    }


    if request.method == 'POST':
        formulario=CustomUserForm(request.POST)
        if formulario.is_valid:
            formulario.save()
            username=formulario.cleaned_data['username']
            password = formulario.cleaned_data['password']
            user = authenticate(username=username,password=password)
            login(request,user)
            return redirect(to='home')

    ## redirigir a inicio        
    return render(request,'registration/registrar.html',data)    

def admin(request):
    return render(request,'admin')