// A Sample Threejs cube was Created yesturday
// Today we are doing trnformations on the cube


import * as THREE from 'three';

const canvas = document.querySelector('canvas.mywebgl');

const myscene = new THREE.Scene();


const mygeometry = new THREE.BoxGeometry(1, 1, 1);

const mymaterial = new THREE.MeshBasicMaterial({ color: 'blue' });
// mesh
const mycube = new THREE.Mesh(mygeometry, mymaterial);

// Step-1 For creating postion for mesh to x, y, z axis with your wish where you waht to place cube in the display.
mycube.position.x = 0.7; // this x axis will be postive or nevigitve value. if it has postive value then cube it will go right side of the display and if it has nevigitve value then cube it will go left side of display

mycube.position.y = - 0.6; // this y axis will be postive or nevigitve value. if it has postive value then cube it will go up side of the display and if it has nevigitve value then cube it will go down side of display

mycube.position.z = 1; // this z axis will be postive or nevigitve value. if it has postive value then it will go near like zooom to camera/cube and if it has nevigitve value then it will go far  to camera/cube

// Note: here you can call x, y, z axis at one code line using set method.like below code
// mycube.position.set(0.2, 0.6, - 3);
myscene.add(mycube);

// if you want to know the what is the lengith of the cube then you can use the below code
//use console.log(mycube.position.length());



// step-2 axis helper method
// the axis helper is a helper that helps you to see the axis of the cube. it will be helpfull to understand the axis of the cube.Note: make sure that you has added the postion of z aixiz in camera. if you not added the z axis postion not roatation in camera then you will not be able to see the axis of the cube.

// const axesHelper = new THREE.AxesHelper()
// myscene.add(axesHelper)


// step-3 Scale method
// here using scale method we can transfrom cube to rectangel my changing its axis
mycube.scale.set(2, 0.5, 0.5); // this axis will be for rectangle
// step-4 ROtations
// mycube.rotation.x = 0.5; 
// mycube.rotation.y = 0.5; 
// Note: fo this rotations we can use math.pi ex: mycube.rotation.x = Math.PI / 2;
mycube.rotation.x = Math.PI / 2;
mycube.rotation.y = Math.PI / 2;
// step-5 Reorder method In Rotation,postion,camers angles etc..
// lets us here we can use reorder method for to all which acces postion u need
// mycube.rotation.reorder('xy');


// Sizes Of Your Display
const Sizes = {
    width: 800,
    height: 600
}

const mycamera = new THREE.PerspectiveCamera(75, Sizes.width / Sizes.height);

// this z axis will helps to dispaly the axis lines on the cube. 
mycamera.position.z = 5;
// Note: Your use set method to set the rotation of the cube and camera. like below code but remember that the set will be work when we use  x, y, z axis at a time is u are using x,y axis the set method will not be work.
// set method mycamera.rotation.set(0.5, 0.5, - 2);


// step-6 LookAt method
// this method will help you to look at the cube. if you want to look at the cube then you can use the below code
// mycamera.lookAt(new THREE.Vector3(0, 0, 0));
// mycamera.lookAt(mycube.position);

myscene.add(mycamera);
// if you want to know the distance between the cube and camera then you can use the below code
//use console.log(mycube.position.distanceTo(mycamera.position));

const myrenderer = new THREE.WebGLRenderer({
    canvas: canvas
});

myrenderer.setSize(Sizes.width, Sizes.height);

myrenderer.render(myscene, mycamera);

