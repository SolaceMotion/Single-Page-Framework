import InitView from './InitView.js';

export default class extends InitView {
  constructor() {
    super();
    //this.setTitle('dashboard');
  }

  HTML() {
    return `
      <nav>
      <a href="/" data-if="location.pathname=='/posts'" data-link>Dashboard</a>
      <a href="/posts" data-link>Posts</a>
      <a href="/settings" data-link>Settings</a>
    </nav>
    `;
  }

  script(): void {
    console.log('This is the dashboard view');
  }
}
