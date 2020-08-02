let instance = null;
export default class BaseController {
  _cache = null;
  constructor() {
    if (!instance) {
      instance = this;
    }
    // instance.cm = new ConfigManager();
  }

  index(req, res, next) {}
}
