const rust = import('./pkg/massivelive_fun.js');

rust.init();

rust.then((m) => m.say_hello_from_rust()).catch(console.error);

// var importObject = { imports: { imported_func: arg => console.log(arg) } };

// WebAssembly.instantiateStreaming(fetch('pkg/massivelive_fun_bg.wasm'), importObject)
//     .then(obj => obj.instance.exports.say_hello_from_rust());
