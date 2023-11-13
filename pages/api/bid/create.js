import { createBid } from "@/services/bid.service";

export default async function createBid(req, res) {
    const { amount, days, proposal, orderId, userId } = req.body;

    try {
        const bid = await createBid({
            amount,
            days,
            proposal,
            orderId,
            userId,
        });
        return res.status(200).json(bid);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

}