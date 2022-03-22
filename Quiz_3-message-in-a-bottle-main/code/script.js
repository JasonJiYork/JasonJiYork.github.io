window.onload = () => { //when the window loads
     let places = staticLoadPlaces(); //calls the function staticLoadPlaces to give the lat and lng to the function places, 
     renderPlaces(places); //then calls renderPlaces and passes in the info given to places
};

function staticLoadPlaces() { //returns name, and location
    return [
        {
            name: 'MyModel',
            location: {
                lat: 43.9019866554893,
                lng: -79.43509227782037,
            }
        },
    ];
}

function renderPlaces(places) { 
    let scene = document.querySelector('a-scene');

    places.forEach((place) => { //for each place under places. set lat and lng to the location given from staticLoadPlaces
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity'); //sets the attributes for each model
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); //set lng and lat
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf'); //set model
        model.setAttribute('rotation', '0 180 0'); //set rotation
        model.setAttribute('animation-mixer', ''); //set animatino
        model.setAttribute('scale', '0.5 0.5 0.5'); //set scale

        model.addEventListener('loaded', () => { //tells us when the place is loaded
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}