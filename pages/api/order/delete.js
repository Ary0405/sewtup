import { deleteOrder,getOrdersByUser } from "@/services/order.service";

export default async function orderDelete(req, res) {

    const { id, userId } = req.body;

    try {
        const isOrder = await getOrdersByUser(userId);
        
        if (!isOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        for (let i = 0; i < isOrder.length; i++) {
            if (isOrder[i].id == id) {
                const order = await deleteOrder(id);
                res.status(200).json(order);
            }
        }
        return res.status(404).json({ message: 'Order not found' });

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

