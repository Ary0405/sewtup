import { getBidsByUser } from "@/services/bid.service";

export default async function getAllBidsOfUser(req, res) {

    const { userId } = req.body;

    if (!userId) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
    }

    try {
        const bids = await getBidsByUser(userId);
        res.status(200).json({ bids });
    }
    catch (error) {
        res.status(400).json({ error });
    }

}