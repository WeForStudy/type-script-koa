import { BaseController } from '../controller/BaseController';

export class BaseService implements BasicInterface, PojoInterface {
  private controller: BaseController;
  constructor(controller: BaseController) {
    this.controller = controller;
  }
  public list = async (ctx) => {
    const { success, data, error } = await this.controller.list();
    if (!success) {
      ctx.body = this.bindFailedPojo(error);
      return;
    }
    ctx.body = this.bindSuccessPojo(data);
  }

  public update = async (ctx) => {
    const { success, data, error } = await this.controller.update();
    if (!success) {
      ctx.body = this.bindFailedPojo(error);
      return;
    }
    ctx.body = this.bindSuccessPojo(data);
  }

  public insert = async(ctx) => {
    const { success, data, error } = await this.controller.insert();
    if (!success) {
      ctx.body = this.bindFailedPojo(error);
      return;
    }
    ctx.body = this.bindSuccessPojo(data);
  }

  public delete = async (ctx) => {
    const { success, data, error } = await this.controller.delete();
    if (!success) {
      ctx.body = this.bindFailedPojo(error);
      return;
    }
    ctx.body = this.bindSuccessPojo(data);
  }
  public bindSuccessPojo(data) {
    return {
      code: 200,
      data,
    }
  }
  public bindFailedPojo(error) {
    return {
      code: 200,
      error,
    }
  }
}