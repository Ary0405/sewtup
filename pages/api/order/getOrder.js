import { getOrderById } from "@/services/order.service";

export default async function getOrder(req, res) {

    const { id } = req.body;

    if (!id) {
        res.send({ status: 400, error: 'Missing body parameter' });
        return;
    }

    try {
        const order = await getOrderById(id);
        res.send({ status: 200, order });
    }
    catch (error) {
        res.send({ status: 400, error });
    }

}

