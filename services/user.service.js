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

export async function updatePassword(id,email, password) {
    return db.user.update({
        where: {
            id,
            email,
        },
        data: {
            password,
        },
    });
}