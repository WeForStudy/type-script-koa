import { BaseService } from './BaseService';
import { AdminController } from '../controller/AdminController';

export class AdminService extends BaseService {
  constructor() {
    super(new AdminController());
  }
}
