import * as express from "express";
import * as bodyParser from "body-parser";
import { SellerRoute } from "./src/routes/seller";
import { OfferRoute } from "./src/routes/offers";
import * as cors from 'cors'

class App {
    public app: express.Application;
    public routePrv: SellerRoute = new SellerRoute();
    public route: OfferRoute = new OfferRoute();

    constructor() {
        this.app = express();
        this.app.use(cors())
        this.config();
        this.routePrv.routes(this.app);
        this.route.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;