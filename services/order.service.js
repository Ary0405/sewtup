import db from '../lib/prisma'

// model Order {
//     id          Int        @id @default(autoincrement())
//     title       String
//     description String     @default("")
//     location    Location?
//     attachments String[]
//     skills      String[]
//     userId      Int
//     experience  Experience @default(ENTRY_LEVEL)
//     designerId  Int?
//     status      Status     @default(UNASSIGNED)
//     finalPrice  Int?
//     maxBudget   Int        @default(0)
//     minBudget   Int        @default(0)
//     bids        Bid[]
//     User        User       @relation(fields: [userId], references: [id])
//   }

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
    });

}


