//Question.3 : create your custom react using JS and render anchor tag.

const reactElement = {
  type: "a", // This will be an anchor tag
  props: {
    href: "https://www.example.com",
    children: "Click here to visit Example.com",
  },
};

function createElement(reactElement) {
  const { type, props } = reactElement;
  const element = document.createElement(type);
  for (let prop in props) {
    if (prop === "children") {
      element.textContent = props[prop];
    } else {
      element.setAttribute(prop, props[prop]);
    }
  }
  return element;
}

function customRender(reactElement, containerId) {
  const container = document.getElementById(containerId);
  const htmlElement = createElement(reactElement);
  container.appendChild(htmlElement);
}

customRender(reactElement, "root");
