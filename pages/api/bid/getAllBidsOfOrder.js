import { getBidsByOrder } from "@/services/bid.service";

export default async function getAllBidsOfOrder(req, res) {

    const { orderId } = req.body;

    if (!orderId) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
    }

    try {
        const bids = await getBidsByOrder(orderId);
        res.status(200).json({ bids });
    }
    catch (error) {
        res.status(400).json({ error });
    }

}

