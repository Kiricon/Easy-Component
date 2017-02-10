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

        // Convert our string in to an object we can mess with.
        let xmlString = this.render();
        let parser = new DOMParser();
        let doc = parser.parseFromString(xmlString, 'text/xml');
        this.el = doc.firstChild;
    }
}

/**
 * Function to render a component
 * @param {Component} component - Component to render
 * @param {Element} parent - parent element to render compponent in
 * @return {Void}
 */
function render(component, parent) {
    parent.appendChild(component.el);
}


module.exports = {
    Component: Component,
    Render: render,
};
