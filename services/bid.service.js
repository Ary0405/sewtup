import db from '../lib/prisma'

// model Bid {
//     id       Int       @id @default(autoincrement())
//     amount   Int       @default(0)
//     days     Int
//     orderId  Int
//     proposal String    @default("")
//     status   BidStatus @default(PENDING)
//     userId   Int
//     Order    Order     @relation(fields: [orderId], references: [id])
//     User     User      @relation(fields: [userId], references: [id])
//   }

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

