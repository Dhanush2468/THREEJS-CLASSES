// Sample First Threejs Creating Cube
// what is it for?
// This is a sample of creating a cube using three.js

import * as THREE from 'three';

// console.log(THREE); // For checking if three.js is working

// Ninth importing canvas from html to display the cube after replacing h1 tag with canvas tag with some calss name
const canvas = document.querySelector('canvas.mywebgl');
// lets see canvas working or not using console.log
// console.log(canvas);


// Everytime in threejs we need to create Scene first 
const myscene = new THREE.Scene();

//second object
const mygeometry = new THREE.BoxGeometry(1, 1, 1);
// third object color using material
const mymaterial = new THREE.MeshBasicMaterial({ color: 'blue' });
// fourth object calling using mesh
const mycube = new THREE.Mesh(mygeometry, mymaterial);
// fifth adding the mycube to the scene
myscene.add(mycube);
//Sixth Size of your Display
const Sizes = {
    width: 800,
    height: 600
}
// Seventh attaching your objects to Camera by display size
const mycamera = new THREE.PerspectiveCamera(75, Sizes.width / Sizes.height);
//adding 13th step to see the cube in webbrowser there are 3 types of camera postions x,y,z --> x is left and right, y is up and down, z is forward and backward of the camera angle
mycamera.position.z = 3; //13th
// the object  was diplayed but its not in 3d cube its in 2d cube so we need to rotate the cube to see the 3d cube by adding x,y position to the cube
mycube.rotation.x = 0.5; //13th
mycube.rotation.y = 0.5; // 13th
// now we can see the 3d cube in webbrowser


// Eight adding camera to scene
myscene.add(mycamera);

// 10th setting up renderer
const myrenderer = new THREE.WebGLRenderer({
    canvas: canvas
});
// 11th setting up renderer size
myrenderer.setSize(Sizes.width, Sizes.height);

// 12th setting up render to render the scene to display objects in webbrowser
myrenderer.render(myscene, mycamera);
// 13th now we can see black screen in webbrowser but we are not able to see the cube because it was hidden some where for to see the cube we need to move the camera by using our objects what we classife in your code to see the cube.Here we are using mycamera object as position to see the cube.go to mycamera object and set the position of the camera to see the cube.
