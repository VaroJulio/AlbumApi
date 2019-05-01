import * as express from "express";
import * as bodyParser from "body-parser";
import { port } from "./settings";
import { Routes } from "./routes/routes";
 
class App {   
    public app: express.Application;  
    public routes: Routes = new Routes(); 
    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.handleErrors();
    }  
    private config(): void {
        this.app.set("port", port);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    private handleErrors(): void {
        this.app.use((req: express.Request, res: express.Response, next: Function) => {
            let err = new Error('Not Found');
            err['status'] = 404;
            next(err);
        });
        this.app.use((err: any, req: express.Request, res: express.Response, next: Function) => {
            res.status(err.status || 500);
            res.send(err.message);
        });
    }  
}
 
export default new App().app;