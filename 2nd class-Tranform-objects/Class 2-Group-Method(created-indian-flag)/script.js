// Now are creating just basic indian flag with 3 cubes in group  
import * as THREE from 'three';

const canvas = document.querySelector('canvas.mywebgl');

const myscene = new THREE.Scene();

//Creting Group
// here u can add rottaion,postion what ever it will move entari objects eg:flag with 5 cubes it will mver enter 5 cubes mean entair flag
const mygroup = new THREE.Group()
myscene.add(mygroup)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(3,1,1),
    new THREE.MeshBasicMaterial({ color : 'orange'})
)
// addting to group now
cube1.position.y= 2
mygroup.add(cube1)
// just duplicatr cube 1 content
//cube 2
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(3,1,1),
    new THREE.MeshBasicMaterial({ color : 'white'})
)
// addting to group now
cube2.position.y= 1
mygroup.add(cube2)
// cube3 
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(3,1,1),
    new THREE.MeshBasicMaterial({ color : 'Green'})
)
// addting to group now
cube3.position.y= 0.1
mygroup.add(cube3)

// cube4 
const cube4 = new THREE.Mesh(
    new THREE.BoxGeometry(0.1,6,0),
    new THREE.MeshBasicMaterial({ color : 'brown'})
)
// addting to group now
cube4.position.x= -1.7
cube4.position.y= 0
mygroup.add(cube4)

// cube5
const cube5 = new THREE.Mesh(
    new THREE.BoxGeometry(1.5,1,0.2),
    new THREE.MeshBasicMaterial({ color : 'silver'})
)
cube5.position.x=-1.7
cube5.position.y=-2.8
// addting to group 
mygroup.add(cube5)



// Axess Helper
const axesHelper = new THREE.AxesHelper()
myscene.add(axesHelper)

// Sizes Of Your Display
const Sizes = {
    width: 800,
    height: 600
}

const mycamera = new THREE.PerspectiveCamera(75, Sizes.width / Sizes.height); 
mycamera.position.z = 5;

myscene.add(mycamera);

const myrenderer = new THREE.WebGLRenderer({
    canvas: canvas
});

myrenderer.setSize(Sizes.width, Sizes.height);

myrenderer.render(myscene, mycamera);

