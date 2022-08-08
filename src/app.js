import flashlightView from './components/view/flashlight.view';

const app = document.createElement('div');
app.className = 'app';

const container = document.createElement('div');
container.className = 'container';

const flashlight = flashlightView.view();

container.append(flashlight);

app.append(container);

export default app;
