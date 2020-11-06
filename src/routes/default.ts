import * as Router from 'koa-router';
import AdminRoutes from './admin';

const defaultRoutes = [
  {
    method: 'get',
    func: 'list',
  },
  {
    method: 'post',
    func: 'insert',
  },
  {
    method: 'post',
    func: 'delete',
  },
  {
    method: 'post',
    func: 'update',
  },
];
export class Injecter {
  public router;

  constructor() {
    this.router = new Router();
  }

  inject() {
    const _routes = {
      admin: AdminRoutes,
    };
    Object.keys(_routes).forEach(key => {
      const { includeDefault, routes } = _routes[key];
      if (includeDefault) {
        defaultRoutes.forEach(({ method, func }) => {
          this.router[method](`/api/${key}/${func}`, ctx => _routes[key].service[func](ctx));
        });
      }
    })
  }

}