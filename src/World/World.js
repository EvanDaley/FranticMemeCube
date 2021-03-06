import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';
import { GUI } from 'https://unpkg.com/three@0.127.0/examples/jsm/libs/dat.gui.module.js';
// import { OrbitContro'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

let camera;
let renderer;
let scene;
let loop;
const gui = new GUI()

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    // const cameraFolder = gui.addFolder("Camera")
    gui.add(controls, "autoRotateSpeed", 0, 500, 1).name("Speed");

    const cube = createCube();
    const { ambientLight, mainLight } = createLights();

    controls.target.copy(cube.position);

    loop.updatables.push(controls);
    // loop.updatables.push(cube);

    scene.add(ambientLight, mainLight, cube);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
