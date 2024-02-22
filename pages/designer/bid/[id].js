import '@/styles/routes/designer/BrowseProject.scss';
import Image from 'next/image';
import { getOrderById } from '@/services/order.service';
import { useState } from 'react';
import { postBid } from '@/operations/bids.fetch';

export async function getServerSideProps(context) {

    const user = context.req.session.user;
    const orderId = context.params.id;

    if (user === undefined || user.role !== 'DESIGNER') {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    const order = await getOrderById(parseInt(orderId));
    if (order === null || order.status !== 'UNASSIGNED') {
        return {
            redirect: {
                destination: '/designer/browse',
                permanent: false,
            }
        }
    }

    const didUserBid = order.Bid.some((bid) => bid.userId === user.id);
    if (didUserBid) {
        return {
            redirect: {
                destination: '/designer/browse',
                permanent: false,
            }
        }
    }

    if (order.Bid !== undefined) {

        order.numBids = order.Bid.length;
        order.avgBid = order.Bid.reduce((acc, bid) => acc + bid.amount, 0) / order.numBids;
        order.Bid = undefined;
    }
    // remove order.Bid
    delete order["Bid"];
    order.date = JSON.parse(JSON.stringify(order.date));

    return {
        props: { user: user, orderId: orderId, order: order }
    }

}

function DesignerBid({ user, orderId, order }) {

    const [bidAmount, setBidAmount] = useState(0);
    const [deliveryTime, setDeliveryTime] = useState(0);
    const [proposal, setProposal] = useState('');

    const onSendBid = async () => {

        if (isNaN(bidAmount) || isNaN(deliveryTime)) {
            alert('Bid amount and delivery time must be numbers');
            return;
        }

        if (bidAmount < order.minBudget || bidAmount > order.maxBudget || bidAmount < 1) {
            alert('Bid amount must be between the minimum and maximum budget');
            return;
        }

        if (deliveryTime < 1) {
            alert('Delivery time must be at least 1 day');
            return;
        }

        // if (proposal.length < 100 || proposal.length > 5000) {
        //     alert('Proposal must be between 100 and 5000 characters');
        //     return;
        // }

        const bid = {
            amount: parseInt(bidAmount),
            days: parseInt(deliveryTime),
            proposal: proposal,
            userId: user.id,
            orderId: parseInt(orderId),
        };

        const response = await postBid(bid);
        if (response.status === 200) {
            alert('Bid sent successfully');
        }
        else {
            alert('Error sending bid');
        }


    }

    const projectData = {
        title: order.title,
        bids: order.numBids,
        averageBid: order.avgBid,
        minBudget: order.minBudget,
        maxBudget: order.maxBudget,
        description: order.description,
        attachments: order.attachments,
    };

    return (
        <div className="BrowseProjectContainer">
            <div className="BrowseProject">
                <div className="BrowseProject__projectTop">
                    <div className="BrowseProject__projectTop--left">
                        <div>{projectData.title}</div>
                        <div className="status">Open</div>
                    </div>
                    <div className="BrowseProject__projectTop--right">
                        <div className="bidsCount">{projectData.bids} Bids</div>
                        <div className="dot">•</div>
                        <div className="averageBid">Average Bid ₹ {projectData.averageBid}</div>
                    </div>
                </div>
                <div className="BrowseProject__projectBottom">
                    <div className="BrowseProject__projectDetails">
                        <div className="projectDetailsHeader">
                            <div className="projectDetailsTitle">
                                Project Details
                            </div>
                            <div className="projectStats">
                                <div className="budget">Budget INR {projectData.minBudget} - {projectData.maxBudget}</div>
                                <div className="timeline">Bidding ends in 6 days, 23 hours</div>
                            </div>
                        </div>
                        <div className="projectDetailsDescription">
                            {projectData.description}
                        </div>
                        <hr className="line" />
                        <div className="attachmentsTitle">
                            Attachments
                        </div>
                        <div className="BrowseProject__projectDetails--attachments">
                            {projectData.attachments.map((attachment, index) => (
                                <div key={index} className="browseProjectDetailsAttachment">
                                    <Image
                                        src={attachment}
                                        alt={`Attachment ${index + 1}`}
                                        fill
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="BrowseProject__biddingArea">
                        <div className="BrowseProject__biddingArea--title">
                            Place a Bid on this Project
                        </div>
                        <div className="BrowseProject__biddingArea--note">
                            You will be able to edit your bid until the project is awarded to
                            someone.
                        </div>
                        <div className="BrowseProject__biddingArea--bidAmount">
                            <div className="BrowseProject__biddingArea--bidAmountTitle">
                                Bid Amount
                            </div>
                            <div className="BrowseProject__biddingArea--bidAmountInput">
                                <div className="currencySymbol">₹</div>
                                <input type="text" onChange={(e) => setBidAmount(e.target.value)} />
                                <div className="currencyText">INR</div>
                            </div>
                        </div>
                        <div className="BrowseProject__biddingArea--deliveryTime">
                            <div className="BrowseProject__biddingArea--deliveryTimeTitle">
                                The project will be delivered in
                            </div>
                            <div className="BrowseProject__biddingArea--deliveryTimeInput">
                                <input type="number" onChange={(e) => setDeliveryTime(e.target.value)} />
                                <div className="daysText">Days</div>
                            </div>
                        </div>
                        <div className="BrowseProject__biddingArea--proposalTitle">
                            Describe your proposal (minimum 100 characters)
                        </div>
                        <textarea
                            className="BrowseProject__biddingArea--proposalTextarea"
                            // rows="4"
                            placeholder="What makes you the best candidate for this project?"
                            onChange={(e) => setProposal(e.target.value)}
                        ></textarea>
                        <button className="BrowseProject__biddingArea--bidButton" onClick={onSendBid}>
                            Bid
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesignerBid