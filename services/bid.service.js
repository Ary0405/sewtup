import db from '../lib/prisma'

export async function createBid(data) {
    return db.bid.create({
        data,
    });
}
