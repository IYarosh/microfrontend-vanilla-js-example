let domElement;

// Single SPA framework require 3 functions - bootstrap, mount and unmount to be able to embed your application

export function bootstrap(props) {
    console.log('Bootstrap app1. Props:', props)
    return Promise
        .resolve()
        .then(() => {
            domElement = document.createElement('div');
            domElement.id = 'app1';
            document.body.appendChild(domElement);
        })
}
export function mount(props) {
    console.log('Mount app1. Props:', props);
    return Promise
        .resolve()
        .then(() => {
            // This is where you would normally use a framework to mount some ui to the dom. See https://single-spa.js.org/docs/ecosystem.html.
            domElement.textContent = "App 1 is mounted"
        })
}
export function unmount(props) {
    console.log('Unmount app1. Props:', props);
    return Promise
        .resolve()
        .then(() => {
            // This is normally where you would tell the framework to unmount the ui from the dom. See https://single-spa.js.org/docs/ecosystem.html
            domElement.textContent = ""
        })
}