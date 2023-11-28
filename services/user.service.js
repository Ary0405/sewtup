import db from '../lib/prisma'

export async function fetchUser(email) {
    return db.user.findUnique({
        where: {
            email,
        },
    });
}

export async function createUser(data) {
    return db.user.create({
        data,
    });
}

// once one user starts convo, we need to maintain their relation by adding their ids
// in the users array of the chat `conversations`, user table


export async function getConversations(id) {
    return db.user.findUnique({
        where: {
            id,
        },
        select: {
            conversations: true,
        },
    });
}

export async function isUserInConvos(id, userId) {
    const convo = await db.user.findUnique({
        where: {
            id,
            conversations: {
                has: userId,
            }
        },
    });
    if (convo || convo != null) {
        return true
    }
    return false
}
