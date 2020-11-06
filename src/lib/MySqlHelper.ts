import * as mysql from 'mysql';
import { CONFIG } from '../config/default';

export class MySQLHelper {
  private static instance: MySQLHelper;
  private pool;
  private initialized;
  // privated the constructor to forbidden outside get the instance of MySQLHelper
  private constructor() {
  }
  // single instance model
  public static getInstance() {
    if (!this.instance) {
      this.instance = new MySQLHelper();
    }
    
    return this.instance;
  }

  public query(sql, values) {
    this.setPool();
    return new Promise((res) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          res({
            success: false,
            err,
          });
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              res({
                success: false,
                err,
              });
            } else {
              res({
                success: true,
                data: rows,
              });
            }
            // release the source of connection pool
            connection.release();
          });
        }
      });
    });
  }
  private setPool() {
    if (!this.initialized) {
      this.pool = mysql.createPool({
        host    : CONFIG.DB.HOST,
        user    : CONFIG.DB.USER,
        password: CONFIG.DB.PASSWORD,
        database: CONFIG.DB.DATABASE,
      });
    }
    return;
  }
}