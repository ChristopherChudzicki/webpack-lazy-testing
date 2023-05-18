async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  window._ = _

  return element;
}

const getBtn = async () => {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = 'Hello World'
  element.appendChild(br);
  element.appendChild(button);

  const printModule = import(/* webpackChunkName: "print", webpackPrefetch: true */ './print')
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = () => printModule.then(module => {
    const { default: print } = module 
    print();
  });
}

getBtn()

getComponent().then((component) => {
  document.body.appendChild(component);
  console.log(window._)
});

console.log(window._)