import './style.css';

import Error from './views/Error';
import InitView from './views/InitView';

import con from './routes.config';

function checkConfigType() {
  if (con.hasOwnProperty('config')) {
    return con.config;
  }
  return con;
}
let g = checkConfigType();

const appEntry = document.querySelector<HTMLDivElement>('#app')!;

document.title = <string>g.head?.title;

//head and link tags
g.head?.meta?.forEach(meta => {
  const metaEl = document.createElement('meta');
  if (meta.charset) {
    metaEl.setAttribute('charset', meta.charset);
  }
  if (meta.name) {
    metaEl.name = meta.name;
  }
  if (meta.content) {
    metaEl.content = meta.content;
  }
  if (meta.hid) {
    metaEl.id = meta.hid;
  }
  document.head.prepend(metaEl);
});

g.head?.link?.forEach(link => {
  const linkEl = document.createElement('link');
  if (link.rel) {
    linkEl.rel = link.rel;
  }
  if (link.type) {
    linkEl.type = link.type;
  }
  if (link.href) {
    linkEl.href = link.href;
  }
  document.head.prepend(linkEl);
});

//Navigator
const navigateTo = (url: string) => {
  history.pushState(null, '', url);

  //Run router again to update the view
  router();
};

const router = async () => {
  const routes = g.routes || [];

  //Global view
  g.global?.components?.forEach(Component => {
    //Create a new instance of each component
    let global = new Component();
    appEntry.innerHTML = global.HTML();
  });

  let match = routes.find(route => route.path === location.pathname);

  if (match?.index) {
    console.log('is index page');
  }

  if (!match) {
    match = { path: location.pathname, view: Error };
  }

  const page: InitView = new match.view();

  page.script();

  appEntry.innerHTML += page.HTML();
  document.title = page.title();
};

function checkChildren(element: HTMLElement | ChildNode) {
  /* if (element.childNodes == null) {
    return;
  } */
  let queue: Array<any> = [];
  queue.push(element);

  while (queue.length) {
    element.childNodes.forEach(children => {
      const ifs = (children as HTMLElement).dataset?.if;
      if (ifs?.includes('==')) {
        const [key, value] = ifs.split('==');

        if (eval(key) == eval(value)) {
          (<HTMLElement>children).style.display = 'inline-block';
        } else {
          (<HTMLElement>children).style.display = 'none';
        }
      }
      queue.push(children); //push children to queue
    });
    element = queue.shift(); //pop the first element from queue
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    const target = <HTMLAnchorElement>e.target;
    if (target.matches('[data-link]')) {
      e.preventDefault();

      //Don't navigate to the same page
      if (target.href == location.href) {
        return;
      }
      navigateTo(target.href);
    }

    checkChildren(appEntry);
  });

  //Run router on mount
  router();
  checkChildren(appEntry);

  //Loop through all elements after router has been called
});
//Update the view when the user navigates to a new page and new state is pushed
window.addEventListener('popstate', () => {
  router();
  checkChildren(appEntry);
});
