import db from '../lib/prisma'

export async function createOrder(data) {
    return db.order.create({
        data,
    });
}


