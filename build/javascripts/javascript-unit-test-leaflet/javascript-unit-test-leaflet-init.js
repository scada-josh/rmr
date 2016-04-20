(function ($) {
    "use strict";

    ///////////////////////////////////////////////////// Your
    // var venueAddress = "Grand Place, 1000, Brussels"; // Venue

    // Map Object
    var map = null;



    /////////////////////////////////////////////////// Adress

    var fn = {

        // Launch Functions
        Launch: function () {
            fn.Apps();
            fn.LeafLet();
        },

        // LeafLet
        LeafLet: function () {
    console.log('LeafLet');


    L.Icon.Default.imagePath = '../../../../bower_components/leaflet/images/'

    // map = L.map('map').setView([51.505, -0.09], 13);

    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    // 	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // L.marker([51.5, -0.09]).addTo(map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();



    // map = new L.Map('map', {center: new L.LatLng(13.708189, 100.599608), zoom: 15});

    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    // 	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // L.marker([13.708189, 100.599608]).addTo(map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();

    // var googleLayer = new L.Google('ROADMAP');
    // map.addLayer(googleLayer);



    // map = new L.Map('map', {maxZoom: 21});
    // map = L.map('map', {
    // 	center: [13.708189, 100.599608],
    // 	// maxZoom: 21,
    // 	markerZoomAnimation:true
    // 	//layers: [rtus]
    // });
    // map.setView(new L.LatLng(13.708189, 100.599608),20);


    // Declaring the source for the map tiles
    // map = L.map('map').setView([13.708189, 100.599608], 14); 
    // mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    // L.tileLayer(
    // 	'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // 		attribution: 'Map data &copy; ' + mapLink,
    // 		maxZoom: 18,
    // 	}).addTo(map);


    // Using multiple tile layers on your map
    var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>', 
    	thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		osmAttrib = '&copy; ' + osmLink + ' Contributors',
		landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', 
		thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;

	var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib, minZoom: 0, maxZoom: 18}),
		landMap = L.tileLayer(landUrl, {attribution: thunAttrib, minZoom: 0, maxZoom: 16});


	// map = L.map('map', {
	// 						layers: [osmMap] // only add one! 
	// 					})
	// 		.setView([13.708189, 100.599608], 14);


    var googleRoadmapLayer = new L.Google('ROADMAP', {attribution: 'การประปานครหลวง', minZoom: 0, maxZoom: 21});
    // map.addLayer(googleRoadmapLayer);

    var googleSatelliteLayer = new L.Google('SATELLITE', {attribution: 'การประปานครหลวง', minZoom: 0, maxZoom: 21});
    // map.addLayer(googleSatelliteLayer);

    var googleHybridLayer = new L.Google('HYBRID', {attribution: 'การประปานครหลวง', minZoom: 0, maxZoom: 21});
    // map.addLayer(googleHybridLayer);


	map = L.map('map', {
							layers: [googleRoadmapLayer] // only add one! 
						})
			.setView([13.708189, 100.599608], 14);

    var baseMaps = {
    	"ROADMAP": googleRoadmapLayer,
    	"SATELLITE" : googleSatelliteLayer,
    	"HYBRID" : googleHybridLayer,
    	"OSM Mapnik": osmMap,
        "Landscape": landMap
    };


    var rtu = L.marker([13.708189, 100.599608])
		       // .addTo(map)
		       .bindPopup("I’m here!")
		       .openPopup();

    var rtus = L.layerGroup([rtu]);

    var overlayMaps = {
    	"RTU": rtus
    };

    L.control.layers(baseMaps, overlayMaps).addTo(map);



 //    var layerControl = new L.Control.Layers(baseMaps, overlayMaps, {collapsed: true});
	// map.addControl(layerControl);


    var zoomLev;
    map.on("zoomend", function(){
    	zoomLev = map.getZoom();
    	console.log(zoomLev);
    	if (zoomLev < 14){
    		// map.removeLayer(lariac);
    		// $('#zoom').val(zoomLev);
    	} else{
    		// $('#zoom').val(zoomLev);
    		// map.addLayer(lariac);
    	}
    });


},
        // Apps
                Apps: function () {
        	console.log('Apps');



        }

    };

    $(document).ready(function () {
        fn.Launch();
    });

})(jQuery);
