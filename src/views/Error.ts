import InitView from './InitView.js';

export default class extends InitView {
  constructor() {
    super();
  }

  HTML() {
    return `
      <h1>404</h1>
      <p>Something went wrong</p>
    `;
  }

  title(): string {
    return '404';
  }
}
