import { getBidsByUser } from "@/services/bid.service";

export default async function getAllBidsOfUser(req, res) {

    const { userId } = req.body;

    if (!userId) {
        res.send({ status: 400, error: 'Missing body parameter' });
        return;
    }

    try {
        const bids = await getBidsByUser(userId);
        res.send({ status: 200, bids });
    }
    catch (error) {
        res.send({ status: 400, error });
    }

}