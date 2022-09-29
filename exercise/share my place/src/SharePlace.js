import {Modal} from './UI/Modal';

class Coordinates {
    constructor(lat, lng) {
        this.latitude = lat;
        this.longitude = lng;
    }
}

class PlaceFinder {
   constructor() {
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
    const modal = new Modal('loading-modal-content', 'Loading location - please wait');
    modal.show();
    navigator.geolocation.getCurrentPosition(
        sucessResult => {
            // console.log(sucessResult);
            modal.hide();
            const lat = sucessResult.coords.latitude + Math.random() * 50;
            const lng = sucessResult.coords.longitude + Math.random() * 50;
            const coordinates = new Coordinates (lat, lng);
            console.log(coordinates);
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