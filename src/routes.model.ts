import InitView from './views/InitView';

interface IConfigRoutes {
  path: string;
  view: typeof InitView;
  index?: boolean;
}

//Two ways to add routes, one of which is to use the ConfigureRoutes model

interface IConfig {
  routes?: IConfigRoutes[];

  global?: {
    components?: Array<typeof InitView>;
  };
  head?: {
    title?: string;
    meta?: Array<{ charset?: string; name?: string; content?: string; hid?: string }>;
    link?: Array<{ rel?: string; type?: string; href?: string }>;
  };
}

export default class Config {
  config: IConfig = {};
  constructor(arg: IConfig) {
    this.setConfig(arg);
  }

  setConfig(arg: IConfig) {
    this.config = arg;
  }

  getConfig() {
    return this.config;
  }
}
