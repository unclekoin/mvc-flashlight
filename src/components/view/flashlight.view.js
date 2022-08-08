import flashlightModel from '../model/flashlight.model';

const flashlightView = {
  view() {
    const flashlight = document.createElement('div');
    flashlight.className = 'flashlight';

    const bulb = document.createElement('div');
    bulb.className = 'flashlight__bulb';

    const powerButton = document.createElement('button');
    powerButton.name = 'power';
    powerButton.textContent = 'On/Off';

    const daylightButton = document.createElement('button');
    daylightButton.name = 'daylight';
    daylightButton.textContent = 'Daylight';

    const nightlightButton = document.createElement('button');
    nightlightButton.name = 'nightlight';
    nightlightButton.textContent = 'Nightlight';

    flashlight.append(bulb, powerButton, daylightButton, nightlightButton);

    return flashlight;
  },

  redraw() {
    const { isOn, color } = flashlightModel;
    const flash = document.querySelector('.flashlight');
    flash.classList.add(`has-color-${color}`);
    if (isOn) {
      flash.classList.add('is-on');
    }

    return flash;
  },
};

export default flashlightView;
