import { 
  AmbientLight,
  DirectionalLight,
  HemisphereLight
 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createLights() {
  const ambientLight = new AmbientLight('white', 5);
  const mainLight = new DirectionalLight('white', .1);

  mainLight.position.set(10, 10, 10);

  // const ambientLight = new HemisphereLight(
    // 'white', // bright sky color
    // 'darkslategrey', // dim ground color
    // 6, // intensity
  // );
  // 
  // const mainLight = new DirectionalLight('white', 1);

  return { ambientLight, mainLight };
}

export { createLights };
