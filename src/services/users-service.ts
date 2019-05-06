import { BaseService } from '../services/base-service';
import * as config from '../settings/index';

export class UsersService extends BaseService {
    private servName: string;
    constructor(){
        super();
        this.servName = config.users;
    }
    
    public async getAll(): Promise<any> {
        return await super.get(this.servName);
    }
}