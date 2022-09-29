class PlaceFinder {
   constructor(){
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('click', this.findAddressHandler);

   }

   locateUserHandler(){
    if (!navigator.geolocation) {
        alert('Location feature is not available. Please use more modern browser or enter the address manually.');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        sucessResult => {
            console.log(sucessResult);
            const coordinates = {
                lat: sucessResult.coords.latitude + Math.random() * 50,
                lng: sucessResult.coords.longitude + Math.random() * 50
            };
            console.log(coordinates);
        }, 
        error => {
       alert('Could not locate you. Please enter the location manually.')
    })

   }

   findAddressHandler(){

   } 
}

const placeFinder = new PlaceFinder();