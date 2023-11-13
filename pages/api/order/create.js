import { createOrder } from "@/services/order.service";
import { isExperienceLevel,isLocation } from "@/utils/validator";

export default async function orderCreate(req, res) {
    const { title, description, location, attachments, skills, userId, experience, maxBudget, minBudget } = req.body;

    if (!title || !description || !location || !attachments || !skills || !userId || !experience || !maxBudget || !minBudget || !isExperienceLevel(experience) || !isLocation(location)) {
        return res.status(400).json({ message: 'Invalid request' });
    }

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

