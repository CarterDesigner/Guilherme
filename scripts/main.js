import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/EIG5xSUY29NbTVUy/scene.splinecode');

function onWindowResize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    canvas.width = newWidth;
    canvas.height = newHeight;
}
window.addEventListener('resize', onWindowResize);
onWindowResize();