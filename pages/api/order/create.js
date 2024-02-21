import { createOrder } from "@/services/order.service";
import { isExperienceLevel, isLocation } from "@/utils/validator";

export default async function orderCreate(req, res) {
    const { title, description, location, attachments, skills, userId, experience, maxBudget, minBudget } = req.body;

    console.log(req.body);

    if (!title || !description || !location || !attachments || !skills || !userId || !experience || !maxBudget || minBudget===undefined) {
        return res.send({ status: 400, error: 'Missing body parameter' });
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
        return res.send({ status: 200, order });
    }
    catch (error) {
        console.log(error);
        return res.send({ status: 400, error })
    }

}

