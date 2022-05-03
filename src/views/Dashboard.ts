import InitView from './InitView.js';

export default class extends InitView {
  state: any = { count: 0 };
  constructor() {
    super();
  }

  updateState() {
    this.state.count += 1;
  }

  HTML() {
    return `
      <button id="G">${this.state.count}</button>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>
    `;
  }
  title(): string {
    return 'dashboard';
  }
  script(): void {
    console.log('This is the dashboard view');
  }
}
