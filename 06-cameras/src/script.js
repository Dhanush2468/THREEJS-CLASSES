import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
/**
 * Base
 */

// cursor likgh imaging graph sheet paper

const cursor = {
    x:0,
    y:0
}




window.addEventListener('mousemove',(e) => {

    cursor.x = e.clientX / sizes.width -0.5
    cursor.y = - (e.clientY / sizes.width -0.5)
    
    console.log(cursor.x);
    console.log(cursor.y);

})







// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.00001, 9999999)


// const aspectRatio = sizes.width / sizes.height
// console.log(aspectRatio);
// const camera = new THREE.OrthographicCamera(-2 /*left */ * aspectRatio ,
//  2 /*right */ * aspectRatio, 
//  2 /* top */, 
//  -2 /* bottom */, 
//  0.2 /* near */ , 
//  2000 /* far */ )

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)


// orbit controls

// console.log(OrbitControls);

const controls = new OrbitControls(camera, canvas)
// controls.target.y = 0.5
// controls.update()

//damping 

controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;

     // Update camera
    //  camera.position.x = cursor.x * 3
    //  camera.position.y = cursor.y * 3

    // to see the back of the cube

    //  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
    //  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
    //  camera.position.y = cursor.y * 5
  
    // // camera.lookAt(new THREE.Vector3())
    // camera.lookAt(mesh.position)

    //update controls
    controls.update()
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()