import { Modal } from './UI/Modal';
import { Map } from './UI/Map';



class PlaceFinder {
   constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('click', this.findAddressHandler);
       
   }

   selectPlace(coordinates) {
    if (this.map) {
        this.map.render();
    } else {
        this.map = new Map(coordinates);
    }
   }

   locateUserHandler(){
    if (!navigator.geolocation) {
        alert('Location feature is not available. Please use more modern browser or enter the address manually.');
        return;
    }
    const modal = new Modal('loading-modal-content', 'Loading location - please wait');
    modal.show();
    navigator.geolocation.getCurrentPosition(
        sucessResult => {
            // console.log(sucessResult);
            modal.hide();
            const coordinates = {
                lat: sucessResult.coords.latitude,
                lng: sucessResult.coords.longitude
            };
            this.selectPlace(coordinates);
        }, 
        error => {
            modal.hide();
            alert('Could not locate you. Please enter the location manually.')
    })

   }

   findAddressHandler(){

   } 
}

const placeFinder = new PlaceFinder();