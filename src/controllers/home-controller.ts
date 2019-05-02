import { Request, Response } from 'express'

export class HomeController{
    public getHome(req: Request, res: Response) {
        res.status(200).send('Album API</br>There is no front-end, see https://github.com/VaroJulio/AlbumApi for implementation!');
    };
}