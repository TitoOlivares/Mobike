from django.db import models

# Create your models here.

class Bicicleta(models.Model):       
    numInterno = models.IntegerField(verbose_name="Numero Interno")
    marca = models.CharField(max_length=20)
    modelo = models.CharField(max_length=20) 
    estado = models.CharField(default='Disponible', max_length=20)
    ubicacion = models.CharField(max_length=50) 
    
    def __str__(self):
        return str(self.numInterno)

class Arriendo(models.Model):
    fechaArriendo = models.DateField(auto_now_add=True)
    horaInicio = models.DateTimeField(auto_now_add=True)
    horaTermino = models.DateTimeField(auto_now=True)
    precio = models.IntegerField()
    metodoPago = models.CharField(default='Tarjeta Credito', max_length=20)
    calificacion = models.IntegerField()
    bicicleta = models.ForeignKey(Bicicleta, on_delete=models.CASCADE)

class Tarjeta(models.Model):
    numTarjeta = models.IntegerField()
    fechaVenc = models.DateField()
    saldo = models.IntegerField()
    estado = models.CharField(default='Pendiente', max_length=20)

    def __str__(self):
        return self.numTarjeta