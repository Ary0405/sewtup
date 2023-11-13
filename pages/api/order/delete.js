import { deleteOrder, isOrderByUser } from "@/services/order.service";

export default async function orderDelete(req, res) {

    const { id, userId } = req.body;

    try {
        const isOrder = await isOrderByUser(id, userId);

        if (!isOrder) {
            return res.send({ status: 401, error: 'Not authorized' });
        }

        const order = await deleteOrder(id);
        res.send({ status: 200, order });

    } catch (e) {
        res.send({ status: 400, error: e });
    }
}

