
import React, { Component } from "react"
import ReactDOM from "react-dom"
import * as THREE from "three"

class App extends Component {
    componentDidMount() {
      	var scene 	   = new THREE.Scene()
      	var camera 	   = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ) // For displaying camera
      	var renderer   = new THREE.WebGLRenderer()
      	var geometry   = new THREE.BoxGeometry( 10, 10, 10 ) // Cube with x, y, z property 
      	var material   = new THREE.MeshBasicMaterial( { color: 0x0066cc } ) // Cube color
      	var cube	   = new THREE.Mesh( geometry, material ) // Cube object
		var gridHelper = new THREE.GridHelper( 150, 15 ); // Grid for scene
		
		camera.position.x = 3
		camera.position.y = 10
		camera.position.z = 35
		
		gridHelper.colorGrid = 0xdedede
		renderer.setSize( window.innerWidth , window.innerHeight -1 )
		this.mount.appendChild(renderer.domElement)
      	
		scene.add(cube)
		scene.add( gridHelper );
		
      	var animate = function () {
      	  	requestAnimationFrame( animate )
      	  	cube.rotation.y += 0.05
      	  	renderer.render( scene, camera )
      	}
      	animate()
    }
    render() {
      	return (
			<div ref={ref => (this.mount = ref)} />
      	)
    }
  }
  const rootElement = document.getElementById("root")
  ReactDOM.render(<App />, rootElement)
export default App
