class Keyboard {
  constructor() {
    this.robot = require("robotjs");
  }

  sendKey(key) {
    if (key.length !== 1)
      key = key === "{bksp}" ? "backspace" : key.replace(/[{}]/g, "");

    try {
      return this.robot.keyTap(key);
    } catch {
      return this;
    }
  }
}

module.exports = Keyboard;
