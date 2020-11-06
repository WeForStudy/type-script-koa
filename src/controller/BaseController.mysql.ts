import { MySQLHelper } from '../lib/MySqlHelper';

export class BaseController implements BasicInterface, PojoInterface {
  private table: string;
  private sql: String;
  constructor(table: string) {
    this.table = table;
  }

  public list(): any {
    this.sql = `select * from ${this.table}`;
    return MySQLHelper.getInstance().query(this.sql, []);
  }
  
  public update(): any {
    this.sql = `select * from ${this.table}`;
    return MySQLHelper.getInstance().query(this.sql, []);
  }

  public insert(): any {
    this.sql = `insert into ${this.table} values()`;
    return MySQLHelper.getInstance().query(this.sql, []);

  }

  public delete(): any {
    this.sql = `delete from ${this.table} where id=?`;
    return MySQLHelper.getInstance().query(this.sql, []);
  }

  public bindSuccessPojo(data) {
    return {
      success: true,
      data,
    }
  }
  public bindFailedPojo(error) {
    return {
      success: false,
      error,
    }
  }
}