// const Koa = require('koa');
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { Injecter } from './routes/default';
import { CONFIG } from './config/default';
// import

export class Runner {
  private options: Object;
  private app: Koa;
  constructor(opts: Object) {
    const _initOpts = {
    };
    let options = Object.create(null);
    const keys = Object.keys(opts)
    if (keys.length > 0) {
      options = Object.assign(options, _initOpts, opts);
    } else {
      options = Object.assign(options, _initOpts);
    }
    this.options = options;
    // console.log(Koa);
    this.app = new Koa();
  }
  public launch = () => {
    this.setCors();
    this.setRoute();
    this.load();
  }

  private setCors = () => {
    this.app.use(async (ctx, next) => {
      ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
      ctx.set('Access-Control-Allow-Origin', 'http://localhost:9000');
      ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
      ctx.set('Access-Control-Allow-Credentials', true);
      ctx.set('Access-Control-Max-Age', 3600 * 24);
      await next();
    });
  }

  private setRoute = () => {
    const _inject = new Injecter();
    _inject.inject();
    this.app.use(_inject.router.routes()).use(_inject.router.allowedMethods());
  }

  private load = () => {
    this.app.use(bodyParser());
    this.app.listen(CONFIG.SYSTEM.PORT);
    console.log(`app was launched on port ${CONFIG.SYSTEM.PORT}`);
  }

}
