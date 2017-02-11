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
function render(component, parent, placement) {
    let xmlString = component.render();
    component.el = getElement(xmlString);

    if(placement == 'append'){
        parent.appendChild(component.el);
    }else if(placement == 'prepend') {
        parent.insertBefore(component.el, parent.firstChild);
    }

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

function append(component, parent) {
    render(component, parent, 'append');
}

function prepend(component, parent) {
    render(component, parent, 'prepend');
}


module.exports = {
    append: append,
    prepend: prepend,
};
