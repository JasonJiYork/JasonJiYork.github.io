window.onload = () => { //when the window loads
  //you would add buttons here using "const button"
  render(); //calls the render function
};

const models = [ //this is where you would handle properties for each model (gltf file, scale, rotation)
  {
    url: './assets/myModel/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },
];

let modelIndex = 0; //first model, you would need to add more code here to add more models but using a for loop

const setModel = (model, entity) => { 
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);
};

//you would add event listeners here by creating a function "const clickListener = function"

function render() { //renders the models and actually puts them at the location so you can see them
  const scene = document.querySelector('a-scene');

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);
  });
}

//this script uses classes such as model and creates objects with many properties and attributes,
// which allows different objects of a same class to be easily produced