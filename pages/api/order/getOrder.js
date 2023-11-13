import { getOrderById } from "@/services/order.service";

export default async function getOrder(req, res) {

    const { id } = req.body;

    if (!id) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
    }

    try {
        const order = await getOrderById(id);
        res.status(200).json({ order });
    }
    catch (error) {
        res.status(400).json({ error });
    }

}

