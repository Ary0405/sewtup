import { withSessionRoute } from "@/lib/ironOptions";
import { createPayment } from "@/services/payments.services";

export default withSessionRoute(paymentCreate);

async function paymentCreate(req, res) {
    const { transaction, imageURL, amount, orderId } = req.body;

    if (!transaction || !imageURL || !amount || !orderId) {
        return res.json({ error: "Missing fields", status: 400 });
    }

    try {
        const payment = await createPayment({ transaction, imageURL, amount, orderId });
        return res.json({ payment, status: 200 });
    }
    catch (error) {
        return res.json({ error: error.message, status: 500 });
    }

}

