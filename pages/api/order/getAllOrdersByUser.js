import { getOrdersByUser } from "@/services/order.service";

export default async function getAllOrdersByUser(req, res) {

    const { userId } = req.body;

    if (!userId) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
    }

    try {
        const orders = await getOrdersByUser(userId);
        res.status(200).json({ orders });
    }
    catch (error) {
        res.status(400).json({ error });
    }

}

