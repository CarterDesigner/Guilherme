import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

function resizeCanvas() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  app.camera.aspect = width / height;
  app.camera.updateProjectionMatrix();
  app.render();
}
app.load('https://prod.spline.design/VAZOR9VRZAigE7Uz/scene.splinecode');
window.addEventListener('resize', resizeCanvas);
resizeCanvas();