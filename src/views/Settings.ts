import InitView from './InitView.js';

export default class extends InitView {
  constructor() {
    super();
    //this.setTitle('settings');
  }

  HTML() {
    return `
      <div data-if="1==2">
      
      
        <h1 data-if="3==3">Settings</h1>
      
      
      </div>
      <p>Welcome to your settings</p>
    `;
  }
  title(): string {
    return 'settings';
  }
  script(): void {
    console.log('This is the settings view');
  }
}
