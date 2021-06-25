import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    controls.tick = () => controls.update();
    controls.enablePan = true
    controls.enableDamping = true;
    controls.enableKeys = true;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 100;

    controls.minDistance = 3;
    controls.maxDistance = 20;

    controls.minAzimuthAngle = - Infinity; // default
    controls.maxAzimuthAngle = Infinity; // default

    controls.minPolarAngle = 0; // default
    controls.maxPolarAngle = Math.PI; // default

    return controls;
}

export { createControls }