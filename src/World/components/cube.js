import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createMaterial(file) {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(file);

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const m1 = createMaterial('1.png');
  const m2 = createMaterial('2.png');
  const m3 = createMaterial('3.png');
  const m4 = createMaterial('4.png');
  const m5 = createMaterial('5.png');
  const m6 = createMaterial('6.png');

  const cube = new Mesh(geometry, [m6,m3,m1,m4,m5,m2]);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += delta * radiansPerSecond;
    cube.rotation.x += delta * radiansPerSecond;
    cube.rotation.y += delta * radiansPerSecond;
  };

  return cube;
}

export { createCube };
