import { createBid } from "@/services/bid.service";

export default async function bidCreate(req, res) {
    const { amount, days, proposal, orderId, userId } = req.body;

    try {
        const bid = await createBid({
            amount,
            days,
            proposal,
            orderId,
            userId,
        });
        return res.send({ status: 200, bid });
    }
    catch (error) {
        console.log(error);
        return res({ status: 400, error})
    }

}