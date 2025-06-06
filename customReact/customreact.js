function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);
  Object.keys(reactElement.props).forEach((prop) => {
    domElement.setAttribute(prop, reactElement.props[prop]);
  });
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me to Visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
