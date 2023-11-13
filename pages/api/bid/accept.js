import { acceptBid, isBidUnderOrder } from "@/services/bid.service";
import { isOrderByUser } from "@/services/order.service";


export default async function bidAccept(req, res) {

    const { orderId, bidId, userId } = req.body;

    if (!orderId || !bidId || !userId) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
    }

    try {
        const order = await isOrderByUser(orderId, userId);
        const bidOrder = await isBidUnderOrder(orderId, bidId);
        if (!order || !bidOrder) {
            res.status(401).json({ error: 'Not authorized' });
            return;
        }

        const bid = await acceptBid(bidId);
        res.status(200).json({ bid });
    }
    catch (error) {
        res.status(400).json({ error });
    }

}