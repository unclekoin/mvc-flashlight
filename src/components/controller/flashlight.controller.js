import flashlightModel from '../model/flashlight.model';

const flashlightController = {
  toggle() {
    flashlightModel.isOn = !flashlightModel.isOn;
  },

  selectColor(e) {
    const buttonName = e.target.name;
    const buttonColors = {
      daylight: 'blue',
      nightlight: 'yellow',
    };

    const preferredColor = buttonColors[buttonName];
    flashlightModel.color = preferredColor;
  },
};

export default flashlightController;
