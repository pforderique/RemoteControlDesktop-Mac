
// Must match what is sent 
class MouseButton {
    static LEFT = 'left';
    static RIGHT = 'right';
    static WHEEL = 'wheel';
}

class Mouse {
    constructor() {
        this.robot = require("robotjs");
    }

    getPos() {
        return this.robot.getMousePos();
    }

    setPos(x, y) {
        this.robot.moveMouse(x, y);
        return this;
    }

    moveCursorBy(dx, dy) {
        const {x: currX, y: currY} = this.getPos();
        return this.setPos(currX + dx, currY + dy);
    }

    click(button, double = false) {
        // TODO(pforderique): robotjs does not support wheel
        if (button === MouseButton.WHEEL) return this;

        if (double) this.press(button).release(button);
        return this.press(button).release(button);
    }

    press(button) {
        this.robot.mouseToggle('down', button);
        return this;
    }

    release(button) {
        this.robot.mouseToggle('up', button);
        return this;
    }
    
    scroll(amount) {
        this.robot.scrollMouse(0, amount);
        return this;
    }
}

module.exports = Mouse;