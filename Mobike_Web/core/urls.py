from django.urls import path
from .views import home, puntos,registro_usuario,admin

urlpatterns = [
    path('', home, name="home"),
    path('puntos/', puntos, name='puntos'),
    path('registro/',registro_usuario, name='registro_usuario'),
    path('admin/',admin,name="admin"),
]