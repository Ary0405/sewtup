import { acceptBid, isBidUnderOrder } from "@/services/bid.service";
import { isOrderByUser } from "@/services/order.service";


export default async function bidAccept(req, res) {

    const { orderId, bidId, userId } = req.body;

    if (!orderId || !bidId || !userId) {
        res.send({ status: 400, error: 'Missing body parameter' });
        return;
    }

    try {
        const order = await isOrderByUser(orderId, userId);
        const bidOrder = await isBidUnderOrder(orderId, bidId);
        if (!order || !bidOrder) {
            res.send({ status: 401, error: 'Not authorized' });
            return;
        }

        const bid = await acceptBid(bidId);
        res.send({ status: 200, bid });
    }
    catch (error) {
        console.log(error);
        res.send({ status: 400, error });
    }

}