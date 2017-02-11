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

function getElement(html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    return d.firstChild;
}

/**
 * Function to render a component
 * @param {Component} component - Component to render
 * @param {Element} parent - parent element to render compponent in
 * @return {Void}
 */
function render(component, parent) {
    parent.appendChild(component.el);
    component.onRender();
    let events = ['click', 'change', 'focus', 'blur', 'hover'];

    events.forEach((event) => {
        if(component[event] != undefined) {
            component.el.addEventListener(event, component[event]);
        }
    });
}

/*
module.exports = {
    Component: Component,
    Render: render,
}; */
