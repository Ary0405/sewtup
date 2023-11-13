import { deleteOrder, isOrderByUser } from "@/services/order.service";

export default async function orderDelete(req, res) {

    const { id, userId } = req.body;

    try {
        const isOrder = await isOrderByUser(id, userId);

        if (!isOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        const order = await deleteOrder(id);
        res.status(200).json({ order });

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

