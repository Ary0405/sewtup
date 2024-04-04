import db from '../lib/prisma'

export async function createOrder(data) {
    return db.order.create({
        data,
    });
}


export async function deleteOrder(id) {
    return db.order.delete({
        where: {
            id,
        },
    });
}

export async function updateOrder(id, data) {
    return db.order.update({
        where: {
            id,
        },
        data,
    });
}

export async function getOrdersByUser(userId) {
    return db.order.findMany({
        where: {
            userId,
        },
    });
}


export async function isOrderByUser(orderId, userId) {
    return db.order.findFirst({
        where: {
            id: orderId,
            userId,
        },
        include: {
            User: {
                select: {
                    email: true,
                    phone: true,
                },
            }
        }
    });

}

export async function getOrderById(id) {
    return db.order.findUnique({
        where: {
            id,
        },
        include: {
            Bid: true,
        },
    });
}


export async function browseProjects() {
    return db.order.findMany({
        where: {
            status: 'UNASSIGNED',
        },
        orderBy: {
            date: 'desc',
        },
    });
}

