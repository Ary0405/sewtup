import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/routes/browseProject/BrowseProject.scss';
import Messages from '@/components/Chat/Messages';

export default function BrowseProject({ project }) {
    // Placeholder data, replace it with actual project data
    const projectData = {
        title: 'Custom Silk Outfit with Embroidery',
        bids: 34,
        averageBid: '7430',
        description: `I'm looking for a talented fashion designer to create a custom silk outfit with exquisite embroidery. The outfit is intended for a special occasion and needs to be both elegant and unique. Here are the details:
        Pictures: I will attach pictures of the style and design I have in mind. These images should serve as a reference for the designer.
        Address Details: The delivery address is 123 Fashion Street, Cityville, State, ensuring that the outfit will reach me promptly.
        Measurements: Chest: 40 inches, Waist: 34 inches, Hips: 42 inches
        Date of Delivery: require the outfit to be delivered by November 15, 2023, in time for my event.
        Materials: I'd like the outfit to be crafted using high-quality silk fabric, ensuring a luxurious and comfortable feel.
        Additional Specifications: I have a specific request for the outfit's design, including detailed embroidery on the collar and cuffs, adding a touch of sophistication and elegance.
        I'm open to discussing the design further and considering various bids from talented designers. Please provide your proposals, including estimated costs, and I look forward to collaborating with the selected designer to create a truly remarkable piece.`,
        attachments: [
            '/Images/attach1.jpg',
            '/Images/attach2.jpg',
            '/Images/attach3.jpg',
        ],
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
                                <div className="budget">Budget INR 6000 - 8000</div>
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
                            {projectData.attachments.map((attachment,index) => (
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
                                <input type="text"/>
                                <div className="currencyText">INR</div>
                            </div>
                        </div>
                        <div className="BrowseProject__biddingArea--deliveryTime">
                            <div className="BrowseProject__biddingArea--deliveryTimeTitle">
                                The project will be delivered in
                            </div>
                            <div className="BrowseProject__biddingArea--deliveryTimeInput">
                                <input type="text"/>
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
                        ></textarea>
                        <button className="BrowseProject__biddingArea--bidButton">
                            Bid
                        </button>
                    </div>
                </div>
            </div>
            <Messages />
        </div>
    );
}
