import * as Three from 'three'
import Document from 'next/document'
import { useEffect } from 'react'

export default function Scene(){
    useEffect(()=>{
     // Scene
     const scene = new Three.Scene()

     // Red cube
     const geometry = new Three.BoxGeometry(1, 1, 1)
     const material = new Three.MeshBasicMaterial({ color: 'red' })
     const mesh = new Three.Mesh(geometry, material)
     scene.add(mesh)
 
     //size 
     const sizes = {
         width:800,
         height:600
     }
 
     // Camera
     const camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height)
     camera.position.x = 0.7
     camera.position.y = - 0.6
     camera.position.z = 1
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