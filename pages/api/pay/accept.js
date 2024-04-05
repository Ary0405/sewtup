import { withSessionRoute } from "@/lib/ironOptions";
import { acceptPayment } from "@/services/payments.services";
import { sendEmailToBidder,sendEmailToUserForConfirmation } from "../bid/accept";
import { fetchOrderForMail } from "@/services/order.service";
import { fetchBidForMail } from "@/services/bid.service";

export default withSessionRoute(paymentAccept);

async function paymentAccept(req, res) {
    const { id, orderId } = req.body;
    
    try{
        await acceptPayment(id);

        const order = await fetchOrderForMail(orderId);
        const bid = await fetchBidForMail(orderId);

        await sendEmailToBidder(bid, order);
        await sendEmailToUserForConfirmation(order, bid);

        res.json({status: 200, message: "Payment accepted" });
    }
    catch (error) {
        console.log(error);
        res.json({ status: 500, message: "Internal server error" });
    }
}
