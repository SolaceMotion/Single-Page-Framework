import InitView from './InitView';

import Dashboard from './Dashboard';

export default class extends InitView {
  constructor() {
    super();
    //this.setTitle('posts');
  }

  HTML() {
    return `
      <h1>Posts</h1>
      <p>Welcome to your posts</p>
    `;
  }

  title(): string {
    return 'posts';
  }

  script(): void {
    console.log('This is the posts view');
  }
}
