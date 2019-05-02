import {Request, Response, Application} from "express";
import { HomeController } from "../controllers/home-controller";

export class Routes {    
    public homeController: HomeController = new HomeController();   
    public routes(app: Application): void {          
        app.route('/').get(this.homeController.getHome);
    }
}