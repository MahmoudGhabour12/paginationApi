import { Offer, OfferInterface } from "../models/offers";

export class OfferRoute {
    public routes(app): void {
        app.get('/transaction', (req, res) => {
            let limit = parseInt(req.query.per_page);   // number of records per page
            let offset = 0;
            Offer.findAndCountAll(
                {
                    where: {
                        seller_id: parseInt(req.query.seller_id)
                    }
                })
                .then((data) => {
                    console.log(req.query);
                    let page = parseInt(req.query.page);      // page number
                    let pages = Math.ceil(data.count / limit);
                    offset = limit * (page - 1);
                    Offer.findAll({
                        attributes: ['id', 'title', 'amount', 'fees', 'updatedAt'],
                        limit: limit,
                        offset: offset,
                        where: {
                            seller_id: parseInt(req.query.seller_id)
                        }
                    })
                        .then((offers) => {
                            res.status(200).json({ 'transaction': offers, paging: { 'total': data.count, 'current_page': page, 'per_page': limit } });
                        });
                })
                .catch(function (error) {
                    res.status(500).send('Internal Server Error');
                });
        });



        app.post('/create_offer', function (req, res) {
            const params: OfferInterface = req.body;

            Offer.create<Offer>(params)
                .then((offer: Offer) => res.status(201).json(offer))
                .catch((err: Error) => res.status(500).json(err));
        })

    }

}