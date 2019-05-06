import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { UsersService } from '../services/users-service';

export class HomeController{
    public async getHome(req: Request, res: Response) {
        let servicio = new UsersService();
        let result = await servicio.getAll();
        res.status(HttpStatus.OK).send('Album API</br>There is no front-end, see https://github.com/VaroJulio/AlbumApi for implementation!');
    };
}