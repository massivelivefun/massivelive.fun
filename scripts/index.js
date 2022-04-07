const rust = import('./pkg/massivelive_fun');
const canvas = document.getElementById('rustCanvas');
const gl = canvas.getContext('webgl', { antialias: true });

// rust.init();

rust.then((m) => m.say_hello_from_rust()).catch(console.error);

// rust.then(m => {
//     if (!gl) {
//         alert('Failed to initialize WebGL');
//         return;
//     }

//     gl.enable(gl.BLEND);
//     gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

//     const FPS_THROTTLE = 1000.0 / 30.0; // milliseconds / frames
//     const client = new m.Client();
//     const initialTime = Date.now();
//     var lastDrawTime = -1; // In milliseconds

//     function render() {
//         window.requestAnimationFrame(render);
//         const currTime = Date.now();

//         if (currTime >= lastDrawTime + FPS_THROTTLE) {
//             lastDrawTime = currTime;

//             if (window.innerHeight != canvas.height || window.innerHeight != canvas.width) {
//                 canvas.height = window.innerHeight;
//                 canvas.clientHeight = window.innerHeight;
//                 canvas.style.height = window.innerHeight;

//                 canvas.width = window.innerWidth;
//                 canvas.clientWidth = window.innerWidth;
//                 canvas.style.width = window.innerWidth;

//                 gl.viewport(0, 0, window.innerWidth, window.innerHeight);
//             }

//             let elapsedTime = currTime - initialTime;
//             // Rust Update call
//             client.update(elapsedTime, windows.innerHeight, window.innerWidth);
//             // Rust Render call
//             client.render();
//         }
//     }

//     render();
// });

// var importObject = { imports: { imported_func: arg => console.log(arg) } };

// WebAssembly.instantiateStreaming(fetch('pkg/massivelive_fun_bg.wasm'), importObject)
//     .then(obj => obj.instance.exports.say_hello_from_rust());
