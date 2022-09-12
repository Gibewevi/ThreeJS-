import * as Three from 'three'
import Document from 'next/document'
import { useEffect } from 'react'

export default function Scene(){
    useEffect(()=>{
     // Scene
     const scene = new Three.Scene()

     // Objects group
     const group = new Three.Group()    
     scene.add(group)

     const cube1 = new Three.Mesh(
        new Three.BoxGeometry(1, 1, 1),
        new Three.MeshBasicMaterial({ color: 0xff0000 })
        )

    group.add(cube1)

    const cube2 = new Three.Mesh(
        new Three.BoxGeometry(1, 1, 1),
        new Three.MeshBasicMaterial({ color: 0x00ff00 })
        )
        
    cube2.position.x  = -2
    group.add(cube2)


    const cube3 = new Three.Mesh(
        new Three.BoxGeometry(1, 1, 1),
        new Three.MeshBasicMaterial({ color: 0x00ffff })
        )
        
    cube3.position.x  = 2
    group.add(cube3)

     // Axes helper
     const axesHelper = new Three.AxesHelper()
     scene.add(axesHelper)

     //size 
     const sizes = {
         width:800,
         height:600
     }
 
     // Camera
     const camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height)

     camera.position.z = 3

     scene.add(camera)
 
 
     //Renderer
     const canvas = document.querySelector('.webgl')
     const renderer = new Three.WebGLRenderer({
         canvas
         
     })  

     // Resize the renderer
     renderer.setSize(sizes.width, sizes.height)

    renderer.render(scene, camera)
    })


    return(
            <canvas className='webgl'></canvas>    
        )
}