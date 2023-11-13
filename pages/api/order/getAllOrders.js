import { getAllOrders } from "@/services/order.service";

export default async function getAllOrder(req, res) {

    try {
        const orders = await getAllOrders();
        res.status(200).json({ orders });
    }
    catch (error) {
        res.status(400).json({ error });
    }

}

