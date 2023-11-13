import { isOrderByUser, updateOrder } from "@/services/order.service";
import { isExperienceLevel, isLocation } from "@/utils/validator";

export default async function orderUpdate(req,res){
    const { id, userId, title, description, location, attachments, skills, experience, maxBudget, minBudget } = req.body;

    if(!id || !userId || !title || !description || !location || !attachments || !skills || !experience || !maxBudget || !minBudget|| !isExperienceLevel(experience) || !isLocation(location)){
        return res.status(400).json({ message: 'Invalid request' });
    }

    try{
        const isOrder = await isOrderByUser(id, userId);
        if(!isOrder){
            return res.status(404).json({ message: 'Order not found' });
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
        res.status(200).json({ order });
    }
    catch(e){
        res.status(500).json({ message: e.message });
    }
}

