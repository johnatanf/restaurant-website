const submitReservation = event => {
    const notification = document.querySelector('.notification');
    const timerId = null;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    notification.classList.remove('notification--hidden');
    setTimeout(() => { // hides notification after 8 seconds 
        notification.classList.add('notification--hidden');
    }, 8000);
}

/* LEAFLETJS CODE */ 
var mymap = L.map('mapid').setView([-6.205844095987677, 106.83820859555249], 13);
var marker = L.marker([-6.205844095987677, 106.83820859555249]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam9obmF0YW5mIiwiYSI6ImNrbmVla292dzFxbDcyb21yNzdlbnZzNWsifQ.nuotQhc60_wFmem4x0TLmA'
}).addTo(mymap);