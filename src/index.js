import * as THREE from "three";

/*
 ** To actually be able to display anything with three.js, we need three things:
 ** scene, camera and renderer, so that we can render the scene with camera.
 */
// Scene
let scene = new THREE.Scene();
// Camera
let camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
// Renderer
let renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
// Append the three.js canvas to the DOM
document.body.appendChild(renderer.domElement);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({
	color: "#FF1493",
	wireframe: true,
	wireframeLinewidth: 10,
});
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
// Add the shapes to the scene
scene.add(cube);

// Zoom the camera out
camera.position.z = 5;

const animate = () => {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();
