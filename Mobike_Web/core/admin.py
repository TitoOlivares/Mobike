from django.contrib import admin
from .models import Arriendo, Bicicleta, Tarjeta

# Register your models here.

class BicicletaAdmin(admin.ModelAdmin):
    list_display = ['numInterno', 'marca', 'modelo', 'estado', 'ubicacion']
    search_fields = ['marca', 'estado', 'ubicacion']
    list_filter = ['marca', 'ubicacion']

class ArriendoAdmin(admin.ModelAdmin):
    list_display = ['id', 'fechaArriendo', 'horaInicio', 'horaTermino', 'precio', 'metodoPago','calificacion', 'bicicleta']
    search_fields = ['fechaArriendo', 'metodoPago']

admin.site.register(Arriendo, ArriendoAdmin)
admin.site.register(Bicicleta, BicicletaAdmin)
admin.site.register(Tarjeta)
