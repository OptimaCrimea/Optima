function init_google_map(map_coords, map_type) {
    var color = "#234c24";
    var styleArray = [
        {
            "featureType": "landscape",
            "stylers": [
                //{"saturation": -100},
                // {"lightness": 65},
                {"visibility": "on"}
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                //{"saturation": -100},
                // {"lightness": 51},
                {"visibility": "simplified"}
            ]
        },
        {
            "featureType": "road.highway",
            "stylers": [
                //{"saturation": -100},
                {"visibility": "simplified"}
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                //{"saturation": -100},
                //{"lightness": 30},
                {"visibility": "on"}
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                // {"saturation": -100},
                // {"lightness": 40},
                {"visibility": "on"}
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                //{"saturation": -100},
                {"visibility": "simplified"}
            ]
        },
        {
            "featureType": "administrative.province",
            "stylers": [
                {"visibility": "off"}
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {"visibility": "on"},
                // { "lightness": -25 },
                // { "saturation": -100}
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                //{"hue": color},
                // {"lightness": -25},
                // {"saturation": -87}
            ]
        }
    ];

    var mapicon = new google.maps.MarkerImage('images/marker.png',
        new google.maps.Size(73, 94),
        new google.maps.Point(0, 0),
        new google.maps.Point(20, 46));

    var isDraggable = jQuery(document).width() > 480 ? true : false;
    var lat_lng = map_coords.split(',');
    var point = new google.maps.LatLng( lat_lng[0], lat_lng[1] );
    var map_icon = mapicon;
    var google_map_type = google.maps.MapTypeId.ROADMAP;
    if ( map_type == 'satellite' ) {
        google_map_type = google.maps.MapTypeId.SATELLITE;
    }
    var mapOptions = {
        zoom: 17,
        center: point,
        mapTypeId: google_map_type,
        styles:styleArray,
        draggable: isDraggable,
        scrollwheel: false,
        panControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    }
    var map = new google.maps.Map(document.getElementById('map-belogorsk'), mapOptions);
    var marker = new google.maps.Marker({
        position: point,
        map: map,
        icon: map_icon
    });
}

init_google_map("45.0601237,34.5961722", "road");