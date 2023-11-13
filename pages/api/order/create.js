import { createOrder } from "@/services/order.service";

export default async function createOrder(req, res) {
    const { title, description, location, attachments, skills, userId, experience, maxBudget, minBudget } = req.body;

    try {
        const order = await createOrder({
            title,
            description,
            location,
            attachments,
            skills,
            userId,
            experience,
            maxBudget,
            minBudget
        });
        return res.status(200).json(order);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

}

