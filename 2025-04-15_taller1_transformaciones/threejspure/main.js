import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Cubes
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
const controls = new OrbitControls( camera, renderer.domElement );

camera.position.set( 0, 20, 100 );
controls.update();

const sphere_geometry = new THREE.SphereGeometry( 15, 32, 16 );
const sphere_material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const sphere = new THREE.Mesh( sphere_geometry, sphere_material );
scene.background = new THREE.Color(0x121212)

const ambientLight = new THREE.AmbientLight( 0xffffff, 0.1 ); // Baja un poco la intensidad
scene.add( ambientLight );

const directionalLight1 = new THREE.DirectionalLight( 0xffa9dd, 0.8 );
directionalLight1.position.set( 10, 20, 3 );
scene.add( directionalLight1 );

const directionalLight2 = new THREE.DirectionalLight( 0x0000ff, 0.5 );
directionalLight2.position.set( -10, 10, -5 ); // Desde otro ángulo
scene.add( directionalLight2 );


const loader = new GLTFLoader();
let frog;

loader.load( './frog_animated_-_3d_model/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  gltf.scene.position.set(0, 0, 0); // Vamos a centrar la escena del modelo

  const froggy_find = gltf.scene.getObjectByName("9498c94f7c8b46b3a9529acf28f0c556fbx");
  if (froggy_find) {
    frog = froggy_find;
    frog.scale.set(20, 20, 20);
  } else {
    console.warn("Didn't find froggy '9498c94f7c8b46b3a9529acf28f0c556fbx'");
  }

}, undefined, function ( error ) {
  console.error( error );
} );


camera.position.z=100;

function animate() {
  requestAnimationFrame( animate );
  controls.update()
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  if (frog) {
    frog.rotation.y += 0.01;
    if (frog.position.x < 0.2) { // Accede a la coordenada X de la posición
        frog.rotation.x += 0.011; // Reduce el incremento para una rotación más suave
    } else {
        if (frog.position.x > 0) { // Accede a la coordenada X de la posición
            frog.rotation.x -= 0.01;
        }
    }
  }
  renderer.render( scene, camera );
}
animate()
