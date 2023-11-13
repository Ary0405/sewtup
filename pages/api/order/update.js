import { isOrderByUser, updateOrder } from "@/services/order.service";
import { isExperienceLevel, isLocation } from "@/utils/validator";

export default async function orderUpdate(req,res){
    const { id, userId, title, description, location, attachments, skills, experience, maxBudget, minBudget } = req.body;

    if(!id || !userId || !title || !description || !location || !attachments || !skills || !experience || !maxBudget || !minBudget|| !isExperienceLevel(experience) || !isLocation(location)){
        return res.send({ status: 400, error: 'Missing body parameter' });
    }

    try{
        const isOrder = await isOrderByUser(id, userId);
        if(!isOrder){
            return res.send({ status: 401, error: 'Not authorized' });
        }
        
        const data = {
            title,
            description,
            location,
            attachments,
            skills,
            experience,
            maxBudget,
            minBudget,
        };

        const order = await updateOrder(id, data);
        res.send({ status: 200, order });
    }
    catch(e){
        res.send({ status: 400, error: e });
    }
}

