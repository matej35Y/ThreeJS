import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'
import { MeshStandardMaterial, PointLightHelper } from 'three'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')


// Scene
const scene = new THREE.Scene()

//text graves
const fontLoader = new FontLoader()

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',  
    (font) => { 
        const textGeometry = new TextGeometry(
    
            'R I P', 
            {
                font: font,
                size: 0.13,
                height: 0.05,
                curveSegments:10,
                bevelEnabled:true,
                bevelThickness: 0.01,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 6
            }
        )
        const materialGraveText = new MeshStandardMaterial({color:'#353535'})
        materialGraveText.matcap = matcapTexture
        graves.children.forEach(grave => {
            const textMesh = new THREE.Mesh(textGeometry, materialGraveText);
            textMesh.position.set(grave.position.x-0.18, grave.position.y+0.08, grave.position.z+0.08);
            graves.add(textMesh); // Add the textMesh as a child of the grave for simpler hierarchy
        });

        
        
    }
)


//text bilbord



fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',  
    (font) => { 
        const textGeometryBillboard = new TextGeometry(
    
            'ZOMBIES', 
            {
                font: font,
                size: 0.25,
                height: 0.015,
                curveSegments:10,
                bevelEnabled:true,
                bevelThickness: 0.11,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 3
                
            }
        )


        const materialBillboardText = new MeshStandardMaterial({color:'#4a6b03',
        
        map:lampColorTexture,
        aoMap:lampAmbientOcclusion,
        aoMapIntensity:10,
        normalMap:lampNormalTexture,
        displacementMap: lampHeightTexture,
        displacementScale: 0.0001,
        metalnessMap: lampMetalnessTexture,
       
        side: THREE.DoubleSide
        })
        const textMeshBilboard = new THREE.Mesh(textGeometryBillboard, materialBillboardText)
        textMeshBilboard.position.set(-0.22, 0.5, 0.1);
        bilboard.add(textMeshBilboard)
    }
)

//Fog
const fog =  new THREE.Fog('#262837',1 ,15)
scene.fog = fog

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('')
matcapTexture.colorSpace = THREE.SRGBColorSpace

const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
doorColorTexture.colorSpace = THREE.SRGBColorSpace
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
doorAlphaTexture.colorSpace = THREE.SRGBColorSpace
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
doorAmbientOcclusionTexture.colorSpace = THREE.SRGBColorSpace
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
doorHeightTexture.colorSpace = THREE.SRGBColorSpace
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
doorNormalTexture.colorSpace = THREE.SRGBColorSpace
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
doorMetalnessTexture.colorSpace = THREE.SRGBColorSpace
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
doorRoughnessTexture.colorSpace = THREE.SRGBColorSpace


const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg')
bricksColorTexture.colorSpace = THREE.SRGBColorSpace
const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
bricksAmbientOcclusionTexture.colorSpace = THREE.SRGBColorSpace
const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
bricksNormalTexture.colorSpace = THREE.SRGBColorSpace
const bricksRoughnessTexture = textureLoader.load('/textures/bricks/roughness.jpg')
bricksRoughnessTexture.colorSpace = THREE.SRGBColorSpace


const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
grassColorTexture.colorSpace = THREE.SRGBColorSpace
const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
grassAmbientOcclusionTexture.colorSpace = THREE.SRGBColorSpace
const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
grassNormalTexture.colorSpace = THREE.SRGBColorSpace
const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg')
grassRoughnessTexture.colorSpace = THREE.SRGBColorSpace

//lamp textures
const lampColorTexture = textureLoader.load('/textures/lamp2/Metal_Rusted_010_basecolor.jpg')
lampColorTexture.colorSpace = THREE.SRGBColorSpace
const lampAmbientOcclusion = textureLoader.load('/textures/lamp2/Metal_Rusted_010_ambientOcclusion.jpg')
lampAmbientOcclusion.colorSpace = THREE.SRGBColorSpace
const lampHeightTexture = textureLoader.load('/textures/lamp2/Metal_Rusted_010_height.png')
lampHeightTexture.colorSpace = THREE.SRGBColorSpace
const lampNormalTexture = textureLoader.load('/textures/lamp2/Metal_Rusted_010_normal.jpg')
lampNormalTexture.colorSpace = THREE.SRGBColorSpace
const lampMetalnessTexture = textureLoader.load('/textures/lamp2/Metal_Rusted_010_metallic.jpg')
lampMetalnessTexture.colorSpace = THREE.SRGBColorSpace
const lampRoughnessTexture = textureLoader.load('/textures/lamp2/Metal_Rusted_010_roughness.jpg')
lampRoughnessTexture.colorSpace = THREE.SRGBColorSpace

const standColorTexture = textureLoader.load('/textures/grave/metal/Metal_006_basecolor.jpg')
standColorTexture.colorSpace = THREE.SRGBColorSpace
const standAmbientOcclusionTexture = textureLoader.load('/textures/grave/metal/Metal_006_ambientOcclusion.jpg')
standAmbientOcclusionTexture.colorSpace = THREE.SRGBColorSpace
const standHeightTexture = textureLoader.load('/textures/grave/metal/Metal_006_height.png')
standHeightTexture.colorSpace = THREE.SRGBColorSpace
const standNormalTexture = textureLoader.load('/textures/grave/metal/Metal_006_normal.png')
standNormalTexture.colorSpace = THREE.SRGBColorSpace
const standMetalicTexture = textureLoader.load('/textures/grave/metal/Metal_006_metallic.jpg')
standMetalicTexture.colorSpace = THREE.SRGBColorSpace
const standRoughnessTexture = textureLoader.load('/textures/grave/metal/Metal_006_roughness.jpg')
standRoughnessTexture.colorSpace = THREE.SRGBColorSpace


grassColorTexture.repeat.set (8, 8)
grassAmbientOcclusionTexture.repeat.set (8, 8)
grassNormalTexture.repeat.set (8, 8)
grassRoughnessTexture.repeat.set (8, 8)

grassColorTexture.wrapS = THREE.RepeatWrapping
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
grassNormalTexture.wrapS = THREE.RepeatWrapping
grassRoughnessTexture.wrapS = THREE.RepeatWrapping

grassColorTexture.wrapT = THREE.RepeatWrapping
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
grassNormalTexture.wrapT = THREE.RepeatWrapping
grassRoughnessTexture.wrapT = THREE.RepeatWrapping




/**
 * House
 */
//Group
const house = new THREE.Group()
scene.add(house)

//Walls
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({
        map:bricksColorTexture,
        aoMap:bricksAmbientOcclusionTexture,
        normalMap:bricksNormalTexture,
        roughnessMap:bricksRoughnessTexture
    })
    
)
walls.position.y = 1.25
house.add(walls)

//Roof
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5,1,4),
    new THREE.MeshStandardMaterial({color: '#b35f45'})
)
roof.position.y = 2.5 + 0.5
roof.rotation.y = Math.PI * 0.25
house.add(roof)

//Lamb
const lamb = new THREE.Mesh(
   new THREE.CylinderGeometry(0.1, 0.1, 4, 10 ),
   new THREE.MeshStandardMaterial({
    map:lampColorTexture,
    aoMap:lampAmbientOcclusion,
    normalMap:lampNormalTexture,
    displacementMap: lampHeightTexture,
        displacementScale: 0.2,
        metalnessMap: lampMetalnessTexture,
        roughnessMap: lampRoughnessTexture,
        side: THREE.DoubleSide
        
   })
)
lamb.position.x = -7
lamb.position.y = 2.1
lamb.position.z = -4.9
scene.add(lamb)

//Lamb Light
const lambLight = new THREE.Mesh(
    new THREE.PlaneGeometry(0.5, 1),
    new THREE.MeshStandardMaterial({
    map:lampColorTexture,
    aoMap:lampAmbientOcclusion,
    normalMap:lampNormalTexture,
    displacementMap: lampHeightTexture,
        displacementScale: 0.2,
        metalnessMap: lampMetalnessTexture,
        roughnessMap: lampRoughnessTexture,
        side: THREE.DoubleSide
    })
    
)
scene.add(lambLight)

lambLight.position.x = -7
lambLight.position.y = 4
lambLight.position.z = -4.6
lambLight.rotation.x = Math.PI * 0.60


//Door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2,2.2,100,100),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture, 
        transparent:true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.2,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture

        


    })
)
door.position.z = 2 + 0.001
door.position.y = 1
house.add(door)

//Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({color: '#89c854'})

const bush1 = new THREE.Mesh(bushGeometry,bushMaterial)
bush1.scale.set(0.5,0.5,0.5)
bush1.position.set(0.8, 0.2, 2.2)

const bush2 = new THREE.Mesh(bushGeometry,bushMaterial)
bush2.scale.set(0.25,0.25,0.25)
bush2.position.set(1.4, 0.1, 2.1)

const bush3 = new THREE.Mesh(bushGeometry,bushMaterial)
bush3.scale.set(0.4,0.4,0.4)
bush3.position.set(-0.8, 0.1, 2.2)

const bush4 = new THREE.Mesh(bushGeometry,bushMaterial)
bush4.scale.set(0.15,0.15,0.15)
bush4.position.set(-1, 0.05, 2.6)

house.add(bush1,bush2,bush3,bush4)


//Graves
const graves = new THREE.Group()
scene.add(graves)

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new THREE.MeshStandardMaterial({
    color:'#b2b6b1',
    roughness:0.348,
    })
    gui.add(graveMaterial, 'metalness').min(0).max(1).step(0.001)


for(let i=0;i<50;i++){
    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 6
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius

    const grave = new THREE.Mesh(graveGeometry,graveMaterial)
    grave.position.set(x, 0.3, z)
    grave.rotation.y = (Math.random() - 0.5) * 0.4
    grave.rotation.z = (Math.random() - 0.5) * 0.4
    grave.castShadow = true
    graves.add(grave)
}

const bilboard = new THREE.Group()
scene.add(bilboard)

//Bilboard
const bilboardPlaneGeometry = new THREE.BoxGeometry(2, 1, 0.2)
const bilboardPlaneMaterial = new THREE.MeshBasicMaterial(
    {
        color: '#36454F',
        side: THREE.DoubleSide,
        map:standColorTexture,
        aoMap:standAmbientOcclusionTexture,
        normalMap:standNormalTexture,
        displacementMap: standHeightTexture,
        displacementScale: 0.2,
        metalnessMap: standMetalicTexture,
        roughnessMap: standRoughnessTexture,
        side: THREE.DoubleSide
    } 
)
const bilboardPlane = new THREE.Mesh(bilboardPlaneGeometry,bilboardPlaneMaterial)
bilboardPlane.position.x = 0.5
bilboardPlane.position.y = 0.6
bilboard.add(bilboardPlane)

const bilboardStandGeometry = new THREE.CylinderGeometry(0.005, 0.005, 2, 5 )
const bilboardStandMaterial = new THREE.MeshStandardMaterial({
    
        color: '36454F',
        side: THREE.DoubleSide,
        map:standColorTexture,
        aoMap:standAmbientOcclusionTexture,
        normalMap:standNormalTexture,
        displacementMap: standHeightTexture,
        displacementScale: 0.2,
        metalnessMap: standMetalicTexture,
        roughnessMap: standRoughnessTexture,
        side: THREE.DoubleSide
    } 
)
const bilboardStand1 = new THREE.Mesh(bilboardStandGeometry,bilboardStandMaterial)
const bilboardStand2 = new THREE.Mesh(bilboardStandGeometry,bilboardStandMaterial)

bilboardStand1.position.x = 1

bilboard.add(bilboardStand1,bilboardStand2)

bilboard.position.x = 4
bilboard.position.y = 1
bilboard.position.z = 1
bilboard.rotation.x = -0.2
bilboard.rotation.y = Math.PI /4





// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({
        map:grassColorTexture,
        aoMap: grassAmbientOcclusionTexture,
        normalMap:grassNormalTexture,
        roughnessMap:grassRoughnessTexture
     })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.25)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

//Door Light
const doorLight = new THREE.PointLight('#ff7d46', 3, 7)
doorLight.position.set (0, 2.2, 2.7)
house.add(doorLight)
// const helper = new THREE.PointLightHelper(doorLight)
// scene.add(helper)


//Lamp light
const graveLight = new THREE.PointLight('#defdfa', 4, 7)
graveLight.position.set (-7, 2.8, -4.3)
house.add(graveLight)
// const helper = new THREE.PointLightHelper(graveLight)
// scene.add(helper)


// bilboardLight
const bilboardLight = new THREE.PointLight('#207530', 12, 15)
bilboardLight.position.set(0.329,0.083,-0.04)
bilboard.add(bilboardLight)

gui.add(bilboardLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(bilboardLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(bilboardLight.position, 'z').min(- 5).max(5).step(0.001)
gui.add(bilboardLight, 'intensity').min(0).max(30).step(0.001)

const helper = new THREE.PointLightHelper(bilboardLight)
// scene.add(helper)


//Ghosts
const ghost1 = new THREE.PointLight('#ff00ff', 6, 3)
scene.add(ghost1)
const ghost2 = new THREE.PointLight('#00ffff', 6, 3)
scene.add(ghost2)
const ghost3 = new THREE.PointLight('#ffff00', 6, 3)
scene.add(ghost3)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837')

//Shadows
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap

moonLight.castShadow = true
doorLight.castShadow = true
ghost1.castShadow = true
ghost2.castShadow = true
ghost3.castShadow = true


walls.castShadow = true
bush1.castShadow = true
bush2.castShadow = true
bush3.castShadow = true

floor.receiveShadow = true
walls.receiveShadow = true


doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
doorLight.shadow.camera.far = 7

ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 7

ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 7

ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 7

bilboardPlane.castShadow = true
bilboardStand1.castShadow = true
bilboardStand2.castShadow = true 
bilboard.castShadow = true
bilboard.receiveShadow = true




/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //update Ghosts
    const ghost1Angle = elapsedTime * 0.5
    ghost1.position.x = Math.cos(ghost1Angle) * 4
    ghost1.position.z = Math.sin(ghost1Angle) * 4
    ghost1.position.y = Math.sin(elapsedTime * 3)

    const ghost2Angle = - elapsedTime * 0.32
    ghost2.position.x = Math.cos(ghost2Angle) * 5
    ghost2.position.z = Math.sin(ghost2Angle) * 5
    ghost2.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5)

    const ghost3Angle = - elapsedTime * 0.13
    ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32))
    ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.8))
    ghost3.position.y = Math.sin(elapsedTime * 5) + Math.sin(elapsedTime * 4)
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()