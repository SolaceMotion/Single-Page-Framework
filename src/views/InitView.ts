interface IInitView {
  HTML(): string;
  title(): string;
  script(): void;
}

export default class implements IInitView {
  constructor() {}
  /* setTitle(title: string) {
    document.title = title;
  } */

  /* Trer */
  HTML(): string {
    return '';
  }
  title(): string {
    return '';
  }
  //Script will execute after the HTML is loaded
  script(): void {}
}
