import * as Router from 'koa-router';
import AdminRoutes from './admin';

export class Injecter {
  public router;

  constructor() {
    this.router = new Router();
  }

  inject() {
    const _routes = {
      admin: AdminRoutes,
    }
    Object.keys(_routes).forEach(key => {
      const { includeDefault, routes } = _routes[key];
      if (includeDefault) {
        [
          'list',
          'insert',
          'delete',
          'update'
        ].forEach(each => {
          this.router.get(`/api/${key}/${each}`, ctx => _routes[key].service[each](ctx));
        });
      }
    })
  }

}