import db from '../lib/prisma'

export async function createBid(data) {
    return db.bid.create({
        data,
    });
}


export async function getBidsByUser(userId) {
    return db.bid.findMany({
        where: {
            userId,
        },
    });
}

export async function getBidsByOrder(orderId) {
    return db.bid.findMany({
        where: {
            orderId,
        },
    });
}

export async function acceptBid(bidId) {
    return db.bid.update({
        where: {
            id: bidId,
        },
        data: {
            status: 'ACCEPTED',
        },
    });
}

export async function isBidUnderOrder(orderId, bidId) {
    return db.bid.findUnique({
        where: {
            id: bidId,
            orderId,
        },
    });
}

