import React from "react";
import "./BrowseItem.scss"
import DashHeader from "@/components/DashTable/DashHeader/DashHeader";
import Image from "next/image";

const BrowseItem = ({ projectData }) => {
    // Provide default values if projectData is not provided
    projectData = projectData || {
        status: "Accepted",
        imageSrc: "/Images/img-2.jpg",
        title: "Custom Silk Outfit with Embroidery",
        estimate: "Estimate Budget: INR 6,000 - INR 8,000",
        bidsInfo: {
            bids: "34 Bids",
            averageBid: "Average Bid $2790",
            biddingEnds: "BIDDING ENDS IN 6 DAYS, 23 HOURS",
        },
        content: {
            description: "I'm seeking a skilled fashion designer to craft a custom silk outfit with intricate embroidery for a special occasion. I've attached reference pictures to convey the desired style. The outfit's delivery address is 123 Fashion Street, Cityville, State, and my measurements are as follows: Chest - 40 inches",
            bid: {
                editBidText: "Edit your bid",
                amount: "$3400",
                duration: "7 days",
            },
        },
        tags: ["Fashion", "Silk Embroidery", "Customise"],
        postedTime: "Posted 5 mins ago",
    };

    return (
        <div className="ProjectItem">
            <div className='box'>
                <div className="itemHeaderContainer">
                    <div className='itemHeaderRow'>
                        <img className="itemHeaderRow__image" alt="" src={projectData.imageSrc} />
                        <div className='itemHeaderText'>
                            <div className='itemHeaderText__header'>
                                {projectData.title}
                            </div>
                            <div className='itemHeaderText--estimate'>
                                {projectData.estimate}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='itemContentRowContainer'>
                    <div className="itemContentRow">
                        <div className="itemContentRow--desc">
                            {projectData.content.description}
                        </div>
                    </div>
                </div>
                <div className="tags-row">
                        <div className="tags-fashion">
                            Fashion
                        </div>
                        <div className="tags-silk">
                            Silk Embroidery
                        </div>
                        <div className="tags-customize">
                            Customize
                        </div>
                    <div className="posted-time">
                        {projectData.postedTime}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseItem;
