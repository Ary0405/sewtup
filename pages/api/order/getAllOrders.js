import { getAllOrders } from "@/services/order.service";

export default async function getAllOrder(req, res) {

    try {
        const orders = await getAllOrders();
        res.send({ status: 200, orders });
    }
    catch (error) {
        res.send({ status: 400, error });
    }

}

