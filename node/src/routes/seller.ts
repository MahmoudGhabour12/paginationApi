import { Request, Response } from "express";
import { PaginationInfo, Seller, SellerInterface } from "../models/sellers";





export class SellerRoute {

    public routes(app): void {

        app.get('/sellers', function (req, res,) {
            Seller.findAll<Seller>({})
                .then((sellers: Array<Seller>) => res.json({ data: { sellers } }))
                .catch((err: Error) => res.status(500).json(err));

        })

        app.post('/create_seller', function (req, res) {
            const params: SellerInterface = req.body;

            Seller.create<Seller>(params)
                .then((seller: Seller) => res.status(201).json(seller))
                .catch((err: Error) => res.status(500).json(err));
        })

    }
}