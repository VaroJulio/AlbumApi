import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';

export class HomeController{
    public getHome(req: Request, res: Response) {
        res.status(HttpStatus.OK).send('Album API</br>There is no front-end, see https://github.com/VaroJulio/AlbumApi for implementation!');
    };
}