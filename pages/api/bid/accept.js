import { acceptBid, isBidUnderOrder } from "@/services/bid.service";
import { isOrderByUser } from "@/services/order.service";
import transporter from "@/utils/transporter";


export default async function bidAccept(req, res) {

    const { orderId, bidId, userId } = req.body;

    if (!orderId || !bidId || !userId) {
        res.send({ status: 400, error: 'Missing body parameter' });
        return;
    }

    try {
        const order = await isOrderByUser(orderId, userId);
        const bidOrder = await isBidUnderOrder(orderId, bidId);
        if (!order || !bidOrder) {
            res.send({ status: 401, error: 'Not authorized' });
            return;
        }

        // await sendEmailToBidder(bidOrder, order);
        await sendEmailToUser(order, bidOrder);

        const bid = await acceptBid(bidId);
        res.send({ status: 200, bid });
    }
    catch (error) {
        console.log(error);
        res.send({ status: 400, error });
    }

}

export async function sendEmailToBidder(bid, order) {
    const mailOptions = {
        from: "sewwtup@gmail.com",
        to: bid.User.email,
        subject: 'Bid Accepted',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    margin: 0;
                    padding: 0;
                }

                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    color: #333;
                }

                p {
                    margin: 0 0 10px;
                    line-height: 1.5;
                    color: #555;
                }

                ul {
                    list-style-type: none;
                    padding: 0;
                }

                li {
                    margin-bottom: 8px;
                }

                li strong {
                    font-weight: bold;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Order Confirmation</h1>
                <p>Hi,</p>
                <p>Your bid has been accepted for the order <strong>${order.title}</strong>.</p>
                <br>
                <p>Time to get to work!</p>
                <p>Order details:</p>
                <ul>
                    <li><strong>Title:</strong> ${order.title}</li>
                    <li><strong>Location:</strong> ${order.location}</li>
                </ul>
                <p>To contact the user, you can use the following information:</p>
                <ul>
                    <li><strong>Name:</strong> ${order.User.name}</li>
                    <li><strong>Email:</strong> ${order.User.email}</li>
                    <li><strong>Phone:</strong> ${order.User.phone}</li>
                </ul>
            </div>
        </body>
        </html>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


async function sendEmailToUser(order, bid) {

    // const payBaseURL = 'http://localhost:3000/customer/pay';
    const payBaseURL = 'https://thesewtup.com/customer/pay';

    const mailOptions = {
        from: "sewwtup@gmail.com",
        to: order.User.email,
        subject: 'Order Payment',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Payment Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f7f7f7;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .container {
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                    padding: 30px;
                    width: 80%;
                    max-width: 600px;
                }

                h1 {
                    color: #333;
                    text-align: center;
                }

                p {
                    color: #666;
                    line-height: 1.6;
                }

                ul {
                    list-style-type: none;
                    padding: 0;
                }

                li {
                    margin-bottom: 10px;
                }

                li strong {
                    font-weight: bold;
                    color: #333;
                }

                a {
                    display: inline-block;
                    color: #000;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    margin-top: 20px;
                }

            </style>
        </head>
        <body>
            <div class="container">
                <h1>Order Payment Confirmation</h1>
                <p>Hi, You accepted the bid for the order <strong>${order.title}</strong>.</p>
                <p>Time to pay!</p>
                <p>Order details:</p>
                <ul>
                    <li><strong>Title:</strong> ${order.title}</li>
                    <li><strong>Location:</strong> ${order.location}</li>
                </ul>
                <p>Pay the designer <strong>${bid.amount} INR</strong></p>
                <p>at <a href="${payBaseURL}?id=${order.id}&user=${order.userId}&amount=${bid.amount}">this link</a></p>
                <p></p>Once you have paid and the team verifies, the designer will be notified and will start working on your order.</p>
            </div>
        </body>
        </html>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export async function sendEmailToUserForConfirmation(order, bid) {

    const mailOptions = {
        from: "sewwtup@gmail.com",
        to: order.User.email,
        subject: 'Payment Confirmation',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Payment Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f7f7f7;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .container {
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                    padding: 30px;
                    width: 80%;
                    max-width: 600px;
                }

                h1 {
                    color: #333;
                    text-align: center;
                }

                p {
                    color: #666;
                    line-height: 1.6;
                }

                ul {
                    list-style-type: none;
                    padding: 0;
                }

                li {
                    margin-bottom: 10px;
                }

                li strong {
                    font-weight: bold;
                    color: #333;
                }

                a {
                    display: inline-block;
                    color: #000;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    margin-top: 20px;
                }

            </style>
        </head>
        <body>
            <div class="container">
                <h1>Order Payment Confirmation</h1>
                <p>Hi, You have paid the designer for the order <strong>${order.title}</strong>.</p>
                <p>Order details:</p>
                <ul>
                    <li><strong>Title:</strong> ${order.title}</li>
                    <li><strong>Location:</strong> ${order.location}</li>
                </ul>
                <p>Designer details:</p>
                <ul>
                    <li><strong>Name:</strong> ${bid.User.name}</li>
                    <li><strong>Email:</strong> ${bid.User.email}</li>
                    <li><strong>Phone:</strong> ${bid.User.phone}</li>
                </ul>
            </div>
        </body>
        </html>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

