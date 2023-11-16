import { getOrdersByUser } from "@/services/order.service";

export default async function getAllOrdersByUser(req, res) {

    const { userId } = req.body;

    if (!userId) {
        res.send({ status: 400, error: 'Missing body parameter' });
        return;
    }

    try {
        const orders = await getOrdersByUser(userId);
        res.send({ status: 200, orders });
    }
    catch (error) {
        res.send({ status: 400, error });
    }

}

