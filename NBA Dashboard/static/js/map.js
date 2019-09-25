
  // initialize the map
  var map = L.map('map').setView([39.82, -98.57], 4);

  // load a tile layer
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoianRob216IiwiYSI6ImNrMHBxYXBtcDAwaHMzY25iZmpyZjhoZjYifQ.NcHSW7GHtHJjK-iduz1HBg'
        }).addTo(map);

    // New Team Marker
    var wizIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg',

	iconSize:     [38, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var wizMarker = L.marker([38.8981, -77.0209], {icon: wizIcon
}).addTo(map);

    // Binding a pop-up to our marker
    wizMarker.bindPopup("Team: Washington Wizards <p> Conference: Eastern <p> Division: Southeast <p> Arena: Capital One Arena");

    // New Team Marker
    var phiIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg',

	iconSize:     [38, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var phiMarker = L.marker([39.9012, -75.172], {icon: phiIcon
}).addTo(map);

    // Binding a pop-up to our marker
    phiMarker.bindPopup("Team: Philadelphia 76ers <p> Conference: Eastern <p> Division: Atlantic <p> Arena: Wells Fargo Center");

        // New Team Marker
        var bosIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',

	iconSize:     [38, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var bosMarker = L.marker([42.3662, -71.0621], {icon: bosIcon
}).addTo(map);

    // Binding a pop-up to our marker
    bosMarker.bindPopup("Team: Boston Centics <p> Conference: Eastern <p> Division: Atlantic <p> Arena: TD Garden");

    // New Team Marker
    var nykIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg',

	iconSize:     [45, 99], // size of the icon
	iconAnchor:   [20, 82], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var nykMarker = L.marker([40.7505, -73.9934], {icon: nykIcon
}).addTo(map);

    // Binding a pop-up to our marker
    nykMarker.bindPopup("Team: New York Knicks <p> Conference: Eastern <p> Division: Atlantic <p> Arena: Madison Square Garden");
    
    // New Team Marker
    var bkIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg',

	iconSize:     [38, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var bkMarker = L.marker([40.6828, -73.9758], {icon: bkIcon
}).addTo(map);

    // Binding a pop-up to our marker
    bkMarker.bindPopup("Team: Brooklyn Nets <p> Conference: Eastern <p> Division: Atlantic <p> Arena: Barclays Center");

    // New Team Marker
    var torIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg',

	iconSize:     [38, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var torMarker = L.marker([43.6435, -79.3791], {icon: torIcon
}).addTo(map);

    // Binding a pop-up to our marker
    torMarker.bindPopup("Team: Toronto Raptors <p> Conference: Eastern <p> Division: Atlantic <p> Arena: Scotiabank Arena");

    // New Team Marker
    var milIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg',

	iconSize:     [38, 95], // size of the icon
	iconAnchor:   [10, 75], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var milMarker = L.marker([43.0436, -87.9172], {icon: milIcon
}).addTo(map);

    // Binding a pop-up to our marker
    milMarker.bindPopup("Team: Milwaukee Bucks <p> Conference: Eastern <p> Division: Central <p> Arena: Fiserv Forum");

    // New Team Marker
    var chiIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg',

	iconSize:     [38, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var chiMarker = L.marker([41.8807, -87.6742], {icon: chiIcon
}).addTo(map);

    // Binding a pop-up to our marker
    chiMarker.bindPopup("Team: Chicago Bulls <p> Conference: Eastern <p> Division: Central <p> Arena: United Center");

    // New Team Marker
    var cleIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg',

	iconSize:     [33, 90], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var cleMarker = L.marker([41.4965, -81.6882], {icon: cleIcon
}).addTo(map);

    // Binding a pop-up to our marker
    cleMarker.bindPopup("Team: Cleveland Cavaliers <p> Conference: Eastern <p> Division: Central <p> Arena: Rocket Mortgage FieldHouse");

    // New Team Marker
    var detIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Pistons_logo17.svg',

	iconSize:     [33, 90], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var detMarker = L.marker([42.341, -83.0552], {icon: detIcon
}).addTo(map);

    // Binding a pop-up to our marker
    detMarker.bindPopup("Team: Detroit Pistons <p> Conference: Eastern <p> Division: Central <p> Arena: Little Caesars Arena");
    
    // New Team Marker
    var indIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg',

	iconSize:     [33, 90], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var indMarker = L.marker([39.7639, -86.1555], {icon: indIcon
}).addTo(map);

    // Binding a pop-up to our marker
    indMarker.bindPopup("Team: Indiana Pacers <p> Conference: Eastern <p> Division: Central <p> Arena: Bankers Life Fieldhouse");

    // New Team Marker
    var utIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg',

	iconSize:     [38, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var utMarker = L.marker([40.7683, -111.9011], {icon: utIcon
}).addTo(map);

    // Binding a pop-up to our marker
    utMarker.bindPopup("Team: Utah Jazz <p> Conference: Western <p> Division: Northwest <p> Arena: 	Vivint Smart Home Arena");

    // New Team Marker
    var okcIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg',

	iconSize:     [37, 94], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var okcMarker = L.marker([35.4634, -97.5151], {icon: okcIcon
}).addTo(map);

    // Binding a pop-up to our marker
    okcMarker.bindPopup("Team: Oklahoma City Thunder <p> Conference: Western <p> Division: Northwest <p> Arena: Chesapeake Energy Arena");

    // New Team Marker
    var minIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg',

	iconSize:     [37, 94], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var minMarker = L.marker([44.9795, -93.2762], {icon: minIcon
}).addTo(map);

    // Binding a pop-up to our marker
    minMarker.bindPopup("Team: Minnesota Timberwolves <p> Conference: Western <p> Division: Northwest <p> Arena: Target Center");

    // New Team Marker
    var porIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg',

	iconSize:     [37, 94], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var porMarker = L.marker([45.5316, -122.6668], {icon: porIcon
}).addTo(map);

    // Binding a pop-up to our marker
    porMarker.bindPopup("Team: Portland Trail Blazers <p> Conference: Western <p> Division: Northwest <p> Arena: Moda Center");

    // New Team Marker
    var denIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg',

	iconSize:     [37, 94], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var denMarker = L.marker([39.7487, -105.0077], {icon: denIcon
}).addTo(map);

    // Binding a pop-up to our marker
    denMarker.bindPopup("Team: Denver Nuggets <p> Conference: Western <p> Division: Northwest <p> Arena: Pepsi Center");

    // New Team Marker
    var lalIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg',

	iconSize:     [45, 99], // size of the icon
	iconAnchor:   [10, 55], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var lalMarker = L.marker([34.043, -118.4], {icon: lalIcon
}).addTo(map);

    // Binding a pop-up to our marker
    lalMarker.bindPopup("Team: Los Angeles Lakers <p> Conference: Western <p> Division: Pacific <p> Arena: Staples Center");

    // New Team Marker
    var lacIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg',

	iconSize:     [41, 97], // size of the icon
	iconAnchor:   [10, 25], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var lacMarker = L.marker([34.043, -118.2673], {icon: lacIcon
}).addTo(map);

    // Binding a pop-up to our marker
    lacMarker.bindPopup("Team: Los Angeles Clippers <p> Conference: Western <p> Division: Pacific <p> Arena: Staples Center");

    // New Team Marker
    var sacIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg',

	iconSize:     [30, 88], // size of the icon
	iconAnchor:   [-5, 55], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var sacMarker = L.marker([38.5806, -121.4996], {icon: sacIcon
}).addTo(map);

    // Binding a pop-up to our marker
    sacMarker.bindPopup("Team: Sacramento Kings <p> Conference: Western <p> Division: Pacific <p> Arena: Golden 1 Center");

    // New Team Marker
    var phxIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg',

	iconSize:     [37, 94], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var phxMarker = L.marker([33.4457, -112.0712], {icon: phxIcon
}).addTo(map);

    // Binding a pop-up to our marker
    phxMarker.bindPopup("Team: Phoenix Suns <p> Conference: Western <p> Division: Pacific <p> Arena: Talking Stick Resort Arena");

    // New Team Marker
    var gsIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg',

	iconSize:     [37, 94], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var gsMarker = L.marker([37.7503, -122.203], {icon: gsIcon
}).addTo(map);

    // Binding a pop-up to our marker
    gsMarker.bindPopup("Team: Golden State Warriors <p> Conference: Western <p> Division: Pacific <p> Arena: Chase Center");
    
    // New Team Marker
    var atlIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg',

	iconSize:     [37, 94], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var atlMarker = L.marker([33.7573, -84.3963], {icon: atlIcon
}).addTo(map);

    // Binding a pop-up to our marker
    atlMarker.bindPopup("Team: Atlanta Hawks <p> Conference: Eastern <p> Division: Southeast <p> Arena: State Farm Arena");

    // New Team Marker
    var miaIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg',

	iconSize:     [37, 94], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var miaMarker = L.marker([25.7814, -80.187], {icon: miaIcon
}).addTo(map);

    // Binding a pop-up to our marker
    miaMarker.bindPopup("Team: Miami Heat <p> Conference: Eastern <p> Division: Southeast <p> Arena: American Airlines Arena");

    // New Team Marker
    var chaIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg',

	iconSize:     [43, 100], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var chaMarker = L.marker([35.2251, -80.8392], {icon: chaIcon
}).addTo(map);

    // Binding a pop-up to our marker
    chaMarker.bindPopup("Team: Charlotte Hornets <p> Conference: Eastern <p> Division: Southeast <p> Arena: Spectrum Center");

    // New Team Marker
    var orlIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg',

	iconSize:     [45, 100], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var orlMarker = L.marker([28.5399, -81.3837], {icon: orlIcon
}).addTo(map);

    // Binding a pop-up to our marker
    orlMarker.bindPopup("Team: Orlando Magic <p> Conference: Eastern <p> Division: Southeast <p> Arena: Amway Center");

    // New Team Marker
    var dalIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg',

	iconSize:     [40, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var dalMarker = L.marker([32.7905, -96.8104], {icon: dalIcon
}).addTo(map);

    // Binding a pop-up to our marker
    dalMarker.bindPopup("Team: Dallas Mavericks <p> Conference: Western <p> Division: Southwest <p> Arena: American Airlines Center");

    // New Team Marker
    var noIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg',

	iconSize:     [40, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var noMarker = L.marker([29.949, -90.0821], {icon: noIcon
}).addTo(map);

    // Binding a pop-up to our marker
    noMarker.bindPopup("Team: New Orleans Pelicans <p> Conference: Western <p> Division: Southwest <p> Arena: Smoothie King Center");
   
    // New Team Marker
    var houIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg',

	iconSize:     [40, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var houMarker = L.marker([29.7508, -95.3621], {icon: houIcon
}).addTo(map);

    // Binding a pop-up to our marker
    houMarker.bindPopup("Team: Houston Rockets <p> Conference: Western <p> Division: Southwest <p> Arena: Toyota Center");

    // New Team Marker
    var saIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg',

	iconSize:     [40, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var saMarker = L.marker([29.4271, -98.4375], {icon: saIcon
}).addTo(map);

    // Binding a pop-up to our marker
    saMarker.bindPopup("Team: San Antonio Spurs <p> Conference: Western <p> Division: Southwest <p> Arena: AT&T Center");

    // New Team Marker
    var memIcon = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg',

	iconSize:     [40, 95], // size of the icon
	iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
	popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
});
    var memMarker = L.marker([35.1382, -90.0505], {icon: memIcon
}).addTo(map);

    // Binding a pop-up to our marker
    memMarker.bindPopup("Team: Memphis Grizzlies <p> Conference: Western <p> Division: Southwest <p> Arena: FedExForum");

        