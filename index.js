/**
 * Class for use making components
 */
class Component {

    /**
     * Parent class constructor
     */
    constructor() {
        // Convert our string in to an object we can mess with.
        let xmlString = this.render();
        this.el = getElement(xmlString);
    }
}

/**
 * Function for turning text in to an html element.
 * @param {String} html - string to conver to an html object
 * @return {Element} - And html element from the text
 */
function getElement(html) {
    let d = document.createElement('div');
    d.innerHTML = html;
    return d.firstChild;
}

/**
 * Function to render a component
 * @param {Component} component - Component to render
 * @param {Element} parent - parent element to render compponent in
 */
function render(component, parent) {
    parent.appendChild(component.el);
    if(component.onRender != undefined) {
        component.onRender();
    }
    let events = ['click', 'change', 'focus', 'blur', 'hover'];

    events.forEach((event) => {
        if(component[event] != undefined) {
            component.el.addEventListener(event, component[event]);
        }
    });
}


module.exports = {
    Component: Component,
    Render: render,
};
