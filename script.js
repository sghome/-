var container = $("#canvas");
var canvasWidth = container.width();
var canvasHeight = container.height();

console.log(canvasWidth);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 80, canvasWidth / canvasHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( canvasWidth, canvasHeight );
renderer.setClearColor( 0x000000, 0 );

container.get(0).appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 2, 10, 7 );
var material = new THREE.MeshBasicMaterial({
      color : 0xdb0e15,
      wireframe : true,
      wireframeLinewidth: 10
    });
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;

function render() {
	requestAnimationFrame( render );
  cube.rotation.y += 0.008;
	renderer.render( scene, camera );
}
render();
