
const createDivElement = function (elementType) {
    return document.createElement(elementType);
};

const createTextElement = function(textElement) {
    return document.createTextNode(textElement);
};

export function createElement(elementType, textElement=null, children=[], eventName=null, eventListner=null) {
    const divElement = createDivElement(elementType);
    if (eventName !== null &&  eventListner !== null) {
        divElement.addEventListener(eventName, eventListner, false);
    }
    children.map(child => divElement.appendChild(child));
    if (textElement !== null && elementType === 'li') {
        divElement.innerHTML = textElement;
    }
    return divElement;
};


export function render(el, Component) {
    el.appendChild(
        Component()
    );
}
