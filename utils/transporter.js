import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    from: "sewwtup@gmail.com",
    auth:{
        user: "sewwtup@gmail.com",
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
    secure: true
});

export default transporter;