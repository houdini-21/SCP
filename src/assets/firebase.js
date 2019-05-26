
var config = {
	apiKey: "AIzaSyBQj5iy1xZO5_sq6enOS_wAqAhAZ1CqXow",
	authDomain: "ubicacionscp.firebaseapp.com",
	databaseURL: "https://ubicacionscp.firebaseio.com",
	projectId: "ubicacionscp",
	storageBucket: "ubicacionscp.appspot.com",
	messagingSenderId: "947098475260"
};
firebase.initializeApp(config);

var cars_count = 0;
var markers = [];
var map;

function initMap() { 
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: new google.maps.LatLng(13.7333988, -89.7176487),
		mapTypeId: 'terrain',
	});
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);
}

function AddCar(data) {

	var angulo = data.val().angulo
	var angulofinal = parseFloat(angulo);
    var icon = { // car icon
        path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
        scale: 0.4,
        fillColor: "#427af4", //<-- Car Color, you can change it 
        fillOpacity: 1,
        strokeWeight: 1,
        anchor: new google.maps.Point(0, 5),
        rotation: data.val().angle //<-- Car angle
    };
		
	var ubicacionlatitud = data.val().lat

	var ubicacionlongitud = data.val().lng

	var latitudfinal = parseFloat(ubicacionlatitud); 
	var longitudfinal = parseFloat(ubicacionlongitud);

	var uluru = { lat: latitudfinal, lng: longitudfinal };
	var marker = new google.maps.Marker({
		position: uluru,
		icon: icon,
		map: map
	});


	markers[data.key] = marker;
	document.getElementById("cars").innerHTML = cars_count-1;
}


            var cars_Ref = firebase.database().ref('/');

            // this event will be triggered when a new object will be added in the database...
            cars_Ref.on('child_added', function (data) {
                cars_count++;
                AddCar(data);
            });

            // this event will be triggered on location change of any car...
            cars_Ref.on('child_changed', function (data) {
                markers[data.key].setMap(null);
                AddCar(data);
            });

            // If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
            cars_Ref.on('child_removed', function (data) {
                markers[data.key].setMap(null);
                cars_count--;
                document.getElementById("cars").innerHTML = cars_count;
            });