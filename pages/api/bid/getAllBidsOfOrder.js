import { getBidsByOrder } from "@/services/bid.service";

export default async function getAllBidsOfOrder(req, res) {

    const { orderId } = req.body;

    if (!orderId) {
        res.send({ status: 400, error: 'Missing body parameter' });
        return;
    }

    try {
        const bids = await getBidsByOrder(orderId);
        res.send({ status: 200, bids });
    }
    catch (error) {
        res.send({ status: 400, error });
    }

}

