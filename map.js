  
  
function creatMap() {
    const center = {
        lat: 60.6757122,
        lng: 17.1093419,
     };
    const zoom = 13;
    const map = new google.maps.Map(document.querySelector('#map'), {
        center,
        zoom,
        
    });
  
    const marker = new google.maps.Marker({
        position:center,
        map: map,
    });
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(center);
[
{
lat: 60.6760789,
lng: 17.147421,
icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
},


{
lat: 60.6764247,
lng: 17.1439166,
},


{
lat: 60.6893772,
lng: 17.1239075,
},

{
lat: 60.6670084,
lng: 17.1235075,
},


{
lat: 60.6711114,
lng: 17.1448839,
},

{
lat: 60.6756502,
lng: 17.1404133,
},
{
lat: 60.6754848,
lng: 17.1449599,
},
].forEach((marker) => {
const m = new google.maps.Marker({
position: marker,
map: map,
});
m.addListener("click", () => {
infowindow.open(map, m);
});
const infowindow = new google.maps.InfoWindow({
content: 'One of my Seven Best Restaurant in Gävle',
});
bounds.extend(marker);
});
map.fitBounds(bounds);
bounds.extend(center);

}









    
               
       
