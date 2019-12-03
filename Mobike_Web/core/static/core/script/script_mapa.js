//creacion del mapa
			
var divMapa= document.getElementById('mapa');
navigator.geolocation.getCurrentPosition(fn_ok,fn_mal);
function fn_mal() {} 
function fn_ok(rta) {
    
    // obtención de las coordenadas del usuario
    var lat = rta.coords.latitude;
    var lon = rta.coords.longitude;

    // icono personalizado para los puntos mobike
    var iconBase= 
        'https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1522-bicycle_4x.png&highlight=ff000000,E65100&scale=1.2';

    var gLatLon = new google.maps.LatLng(lat,lon);
    var objConfig = {
        
        zoom: 17,
        center: gLatLon
    }
    var gMapa= new google.maps.Map(divMapa,objConfig); 
    // ubicación del usuario
    var objConfigMarker = {
        position: gLatLon,
        map: gMapa,
        title:"Usted esta aquí"
    }
    var gMarker = new google.maps.Marker(objConfigMarker,);

    //marcadores puntos mobike

    //puntos mobike el numero del marcador indica el numero del punto
    var coord1 = {lat: -33.431233, lng: -70.574393};
    
    var marker1 = new google.maps.Marker({
        position: coord1,
        map: gMapa,
        title: '1- Bilbao / Vespucio',
        icon: iconBase
          });

    var coord2 = {lat: -33.430270, lng: -70.554140};
    
    var marker2 = new google.maps.Marker({
        position: coord2,
        map: gMapa,
        title: '2- Núcleo Comercial / Rotonda Tomás Moro',
        icon: iconBase
          }); 

    var coord3 = {lat: -33.430072, lng: -70.547783};
    
    var marker3 = new google.maps.Marker({
        position: coord3,
        map: gMapa,
        title: '3- Acceso Parque Padre Hurtado',
        icon: iconBase
          }); 

    var coord4 = {lat: -33.433947, lng: -70.542758};
    
    var marker4 = new google.maps.Marker({
        position: coord4,
        map: gMapa,
        title: '4- Ciclovía Valenzuela Puelma 1',
        icon: iconBase
          }); 

    var coord5 = {lat: -33.434795, lng: -70.550256};
    
    var marker5 = new google.maps.Marker({
        position: coord5,
        map: gMapa,
        title: '5- Ciclovía Valenzuela Puelma 2',
        icon: iconBase
          }); 

    var coord6 = {lat: -33.434390, lng: -70.557636};
    

    var marker6 = new google.maps.Marker({
        position: coord6,
        map: gMapa,
        title: '6- Plaza Nueva Dehli',
        icon: iconBase
          }); 

    var coord7 = {lat: -33.438302, lng: -70.573220};
    
    var marker7 = new google.maps.Marker({
        position: coord7,
        map: gMapa,
        title: 'Av. Tobalaba esq. Av. Ossa',
        icon: iconBase
          });

    var coord8 = {lat: -33.438655, lng: -70.561442};
    
    var marker8 = new google.maps.Marker({
        position: coord8,
        map: gMapa,
        title: '8- Núcleo Comercial / Monseñor Edwards',
        icon: iconBase
          });	 

    var coord9 = {lat: -33.439094, lng: -70.556139};

    var marker9 = new google.maps.Marker({
        position: coord9,
        map: gMapa,
        title: '9- Plaza Chile-Perú',
        icon: iconBase
          }); 

    var coord10 = {lat: -33.440487, lng: -70.533636};

    var marker10 = new google.maps.Marker({
        position: coord10,
        map: gMapa,
        title: '10- Plaza La Reina',
        icon: iconBase
          });

    var coord11 = {lat: -33.440912, lng: -70.536132};

    var marker11 = new google.maps.Marker({
        position: coord11,
        map: gMapa,
        title: '11- Centro Comercial Las Brujas',
        icon: iconBase
          });

    var coord12 = {lat: -33.442626, lng: -70.543331};

    var marker12 = new google.maps.Marker({
        position: coord12,
        map: gMapa,
        title: '12- Plaza Ossandón',
        icon: iconBase
          });

    var coord13 = {lat: -33.444348, lng: -70.552255};

    var marker13 = new google.maps.Marker({
        position: coord13,
        map: gMapa,
        title: '13- Núcleo Comercial / La Oca',
        icon: iconBase
          });

    var coord14 = {lat: -33.444038, lng: -70.559416};

    var marker14 = new google.maps.Marker({
        position: coord14,
        map: gMapa,
        title: '14- Centro Cultural Vicente Bianchi',
        icon: iconBase
          });

    var coord15 = {lat: -33.444202, lng: -70.565241};

    var marker15 = new google.maps.Marker({
        position: coord15,
        map: gMapa,
        title: '15- Plaza Santiago Bueras',
        icon: iconBase
          });

    var coord16 = {lat: -33.445129, lng: -70.571984};

    var marker16 = new google.maps.Marker({
        position: coord16,
        map: gMapa,
        title: '16- Metro Simón Bolívar',
        icon: iconBase
          });

    var coord17 = {lat: -33.447996, lng: -70.571649};

    var marker17 = new google.maps.Marker({
        position: coord17,
        map: gMapa,
        title: '17- Cine Hoyts',
        icon: iconBase
          });

    var coord18 = {lat: -33.448999, lng: -70.555926};

    var marker18 = new google.maps.Marker({
        position: coord18,
        map: gMapa,
        title: '18- Plaza Gabriela Mistral',
        icon: iconBase
          });

    var coord19 = {lat: -33.444879, lng: -70.536696};

    var marker19 = new google.maps.Marker({
        position: coord19,
        map: gMapa,
        title: '19- Valenzuela Llanos / Simón Bolívar',
        icon: iconBase
          });

    var coord20 = {lat: -33.452493, lng: -70.570600};

    var marker20 = new google.maps.Marker({
        position: coord20,
        map: gMapa,
        title: '20- Mall Plaza Egaña / Casa Maroto',
        icon: iconBase
          });

    var coord21 = {lat: -33.452895, lng: -70.565151};

    var marker21 = new google.maps.Marker({
        position: coord21,
        map: gMapa,
        title: '21- Núcleo Comercial / Lynch Norte',
        icon: iconBase
          });

    var coord22 = {lat: -33.451968, lng: -70.558360};

    var marker22 = new google.maps.Marker({
        position: coord22,
        map: gMapa,
        title: '22- Futura Estación Metro Castillo Velasco',
        icon: iconBase
          });

    var coord23 = {lat: -33.451065, lng: -70.551155};

    var marker23 = new google.maps.Marker({
        position: coord23,
        map: gMapa,
        title: '23- Parroquia Santa Rita / Colegio',
        icon: iconBase
          });

    var coord24 = {lat: -33.450996, lng: -70.543447};

    var marker24 = new google.maps.Marker({
        position: coord24,
        map: gMapa,
        title: '24- Casona Nemesio Antúnez / Centro Cívico',
        icon: iconBase
          });

    var coord25 = {lat: -33.451303, lng: -70.540308};

    var marker25 = new google.maps.Marker({
        position: coord25,
        map: gMapa,
        title: '25- Hospital Militar',
        icon: iconBase
          });

    var coord26 = {lat: -33.452204, lng: -70.531319};

    
    var marker26 = new google.maps.Marker({
        position: coord26,
        map: gMapa,
        title: '26- Aldea del Encuentro',
        icon: iconBase
          });


    var coord27 = {lat: -33.452560, lng:-70.529817};

    
    var marker27 = new google.maps.Marker({
        position: coord27,
        map: gMapa,
        title: '27- Municipalidad de La Reina',
        icon: iconBase
          });

    var coord28 = {lat: -33.459658, lng: -70.562252};

    
    var marker28 = new google.maps.Marker({
        position: coord28,
        map: gMapa,
        title: '28- Centro Deportivo Dragones de La Reina',
        icon: iconBase
          });

    var coord29 = {lat: -33.459708, lng: -70.553695};

    
    var marker29 = new google.maps.Marker({
        position: coord29,
        map: gMapa,
        title: '29- Plaza Las Campanas ',
        icon: iconBase
          });

    var coord30 = {lat: -33.460149, lng: -70.552064};

    
    var marker30 = new google.maps.Marker({
        position: coord30,
        map: gMapa,
        title: '30- Plaza El Tambo ',
        icon: iconBase
          });

    var coord31 = {lat: -33.462806, lng: -70.547470};

    
    var marker31 = new google.maps.Marker({
        position: coord31,
        map: gMapa,
        title: '31- Núcleo Comercial / Líder Jorge Alessandri ',
        icon: iconBase
          });

    var coord32 = {lat: -33.458793, lng: -70.537146};

    
    var marker32 = new google.maps.Marker({
        position: coord32,
        map: gMapa,
        title: '32- Complejo Deportivo Talinay',
        icon: iconBase
          });
    
    var coord33 = {lat: -33.459030, lng: -70.529257};

    
    var marker33 = new google.maps.Marker({
        position: coord33,
        map: gMapa,
        title: '33- Ciclovía Las Perdices 1',
        icon: iconBase
          });

    var coord34 = {lat: -33.446956, lng: -70.528697};

    
    var marker34 = new google.maps.Marker({
        position: coord34,
        map: gMapa,
        title: '34- Ciclovía Las Perdices 2',
        icon: iconBase
          });

    var coord35 = {lat: -33.433010, lng: -70.537934};

    
    var marker35 = new google.maps.Marker({
        position: coord35,
        map: gMapa,
        title: '35- Ciclovía Padre Hurtado',
        icon: iconBase
          });


    

    var coord36 = {lat: -33.451812, lng: -70.538461};  

    var marker36 = new google.maps.Marker({
        position: coord36,
        map: gMapa,
        title: '36- Mercadito Villa La Reina',
        icon: iconBase
          });

    

}