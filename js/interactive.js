
const windowWidth = 600;
const windowHeight = 600;

$(document).ready(function () {

    // Setup scene and camera
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000);
    scene.background = new THREE.Color(0xf4f4f4);

    // Build our renderer and append it to its container
    var renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setSize(windowWidth, windowHeight);
    document.getElementById('render-target').appendChild(renderer.domElement);

    // Add a cube to the scene with a normal material
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add a light to the scene
    var spotlight = new THREE.SpotLight(0xffffff);
    spotlight.position.set(10, 100, -50);
    scene.add(spotlight);

    // Position the camera
    camera.position.z = 5;

    // Setup rendering loop
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var lastFrameTime = new Date().getTime() / 1000;
    var totalGameTime = 0;
    function update(dt, t) {

        cube.rotation.x += 1 * dt;
        cube.rotation.y += 1 * dt;

        setTimeout(function () {
            var currTime = new Date().getTime() / 1000;
            var dt = currTime - (lastFrameTime || currTime);
            totalGameTime += dt;

            update(dt, totalGameTime);

            lastFrameTime = currTime;
        }, 0);
    }

    function render() {
        renderer.render(scene, camera);
        requestAnimFrame(render);
    }

    render();
    update(0, totalGameTime);
}) 