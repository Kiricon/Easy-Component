/**
 * Class for use making components
 */
class Component {

    /**
     * Parent class constructor
     */
    constructor() {
        if (new.target === Abstract) {
        throw new TypeError('Cannot construct Abstract instances directly');
        }
    }
}


module.exports = {
    Component: Component,
};
