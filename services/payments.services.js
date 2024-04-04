import db from "@/lib/prisma";

export async function fetchAllPayments() {
    return await db.payment.findMany();
}

export async function createPayment(data) {
    return await db.payment.create({ data });
}