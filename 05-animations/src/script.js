import * as THREE from 'three'
import gsap from 'gsap' // --- 11



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// clock -- 5

const clock = new THREE.Clock()


// now we will make real time animations by updating the objects in the scene --- 4

// let Prevtime = Date.now()



//GSAP LIBRARY --- 10
// lest rotate code in borders of the screen

// art we draw                                                                         
                                                                                       
// :+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++        
// -@@%################################@@%################################@@@        
// -@@+                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@+.......:..:....:..:.............@@+................................@@@        
// -@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@=                                @@-                                @@@        
// -@@+                                @@-                                @@@        
// -@@#+++=============================@@*=============================+++@@@        
// -@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        
                                                                                  
                                                                                  
                                                                                  
                                                                                  

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 }) // moves  right from its position
gsap.to(mesh.position, { duration: 1, delay: 2, y: -1.3 }) // moves   down from its position
gsap.to(mesh.position, { duration: 1, delay: 3, x: -2 }) // moves left from its position
gsap.to(mesh.position, { duration: 1, delay: 4, y: 1.3 }) // moves up from its position
gsap.to(mesh.position, { duration: 1, delay: 5, x: 2 }) // moves right from its position
gsap.to(mesh.position, { duration: 1, delay: 6, y: -0.003 }) //  moves center down of right side from its position
gsap.to(mesh.position, { duration: 1, delay: 7, x: 0 }) //  moves center from its position
gsap.to(mesh.position, { duration: 1, delay: 8, y: 1.3 }) //  moves mid up from its position
gsap.to(mesh.position, { duration: 1, delay: 9, y: 0 }) //  moves center from its position
gsap.to(mesh.position, { duration: 1, delay: 10, y: -1.3 }) //  moves mid down from its position
gsap.to(mesh.position, { duration: 1, delay: 11, y: 0 }) //  moves center from its position
gsap.to(mesh.position, { duration: 1, delay: 12, x: -2 }) //  moves right from its position
gsap.to(mesh.position, { duration: 1, delay: 13, x: 0 }) //  moves center from its position






// ANIMATIONS

const tick = ()  => {


    // clock -- 5

    const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime);
    // mesh.rotation.y = elapsedTime

    // now we will reoatate one revelation per second
    // mesh.rotation.z = elapsedTime * Math.PI * 2
    // now lets play with poosition
    // mesh.position.y = elapsedTime //-- it will go up  
    // mesh.position.y = Math.sin(elapsedTime) // -- it will go up and down

    // mesh.position.y = Math.cos(elapsedTime) // -- it will go down and up

    // now lets animate our cube with a circle animation clock wise and anticlock-- 6

    // anticlock wise

    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    // clock wise


    // mesh.position.y = Math.cos(elapsedTime)
    // mesh.position.x = Math.sin(elapsedTime)






    // line animation clock and anticlock-- 7
    
    // mesh.position.y = Math.cos(elapsedTime) // -- it will go down and up
    // mesh.position.x = Math.sin(elapsedTime) //-- it will go left and right
    // mesh.position.z = Math.sin(elapsedTime) //-- it will go front and back

    // if want to animate in a diagonal way
    
    // mesh.position.x = Math.PI * Math.cos(elapsedTime)

    // eclipse animation -- 8
    // mesh.position.x = Math.PI * Math.sin(elapsedTime)
    // mesh.position.y = Math.cos(elapsedTime)
    // mesh.position.y = Math.sin(elapsedTime)


    // -----------------------------

    // now lets animate cemaera -- 9

    // camera coming front to back and shwing all edges

    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)
    // camera.position.z = Math.sin(elapsedTime)
    // camera.lookAt(mesh.position)

    // camera miving right to left and showing 2-3 edges --10    
    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)
    // // camera.position.z = Math.cos(elapsedTime)
    // camera.lookAt(mesh.position)



































// now we will make real time animations by updating the objects in the scene --- 4

// const currentTime = Date.now()
// const deltaTime = currentTime - Prevtime
// Prevtime = currentTime


// update objects -- 3

// mesh.rotation.y += 0.01
// mesh.rotation.y += 0.002 * deltaTime

//render ---2 
renderer.render(scene, camera)

// now when we write on window.requestAnimationFrame(tick) it will call the function tick every frame ---1
window.requestAnimationFrame(tick)
}

tick()