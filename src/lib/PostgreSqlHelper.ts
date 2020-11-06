// const psql = require('psql');
import { Client } from 'pg';
import { CONFIG } from '../config/default';
const { DB } = CONFIG;
export class DBHelper {
    static instance;

    static initialize() {
        if (!this.instance) {
            this.instance = new Client({
                user: DB.USER,
                password: DB.PASSWORD,
                host: DB.HOST,
                database: DB.DATABASE,
                port: DB.PORT,
            });
            return this.instance.connect();
        }
    }

    static query(sql: string, params: any) {
        return new Promise(async (resolve, reject) => {
            await this.initialize();
            this.instance.query(sql, params).then(({rows}) => {
                resolve(this.buildSuccessPojo(rows));
                this.instance.end();
            }).catch(err => resolve(this.buildFailedPojo(err)));
        });
        
    }

    static buildSuccessPojo(data: any) {
        return {
            success: true,
            data,
        };
    }

    static buildFailedPojo(error: string) {
        return {
            success: false,
            error,
        };
    }
}