import * as singleSpa from 'single-spa';

const app1Name = 'app1';
const app2Name = 'app2';

const app1Loader = () => import('./app1.js');
const app2Loader = () => import('./app2.js');

let activeTab = 1;

const showApp1 = () => activeTab === 1;
const showApp2 = () => activeTab === 2;

singleSpa.registerApplication(app1Name, app1Loader, showApp1);
singleSpa.registerApplication(app2Name, app2Loader, showApp2);

console.log('Starting single spa framework');
singleSpa.start();

document.getElementById('tab-app1').addEventListener('click', () => {
    activeTab = 1;
    singleSpa.triggerAppChange();
});

document.getElementById('tab-app2').addEventListener('click', () => {
    activeTab = 2
    singleSpa.triggerAppChange();
});