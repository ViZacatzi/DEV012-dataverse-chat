let ROUTES = {};
let rootElement = "";

export const setRootElement = (newRootelementValue) => {
  // assign rootEl
    rootElement = newRootelementValue;
}

export const setRouters = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
    ROUTES = newRoutesValue
}

const renderView = (pathname, props={}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
    // in case not found render the error view
  }else{
    root.appendChild(ROUTES["/error"](props));
  }
  

  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  const URLvisited = window.location.origin + pathname;
  history.pushState({}, "", URLvisited);

  // render the view with the pathname and props
  renderView(pathname, props);
}

export const onURLChange = () => {
  // parse the location for the pathname and search params
   //convert the search params to an object
   //render the view with the pathname and object
  const pathname = window.location.pathname
  renderView(pathname);
};

window.onpopstate = onURLChange;
