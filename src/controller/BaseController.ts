import { DBHelper } from '../lib/PostgreSqlHelper';

export class BaseController implements BasicInterface, PojoInterface {
  private table: string;
  private sql: string;
  constructor(table: string) {
    this.table = table;
  }

  public list(): any {
    this.sql = `select * from ${this.table}`;
    return DBHelper.query(this.sql, []);
  }
  
  public update(): any {
    this.sql = `select * from ${this.table}`;
    return DBHelper.query(this.sql, []);
  }

  public insert(): any {
    this.sql = `insert into ${this.table} values()`;
    return DBHelper.query(this.sql, []);

  }

  public delete(): any {
    this.sql = `delete from ${this.table} where id=?`;
    return DBHelper.query(this.sql, []);
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