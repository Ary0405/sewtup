import React from "react";
import "./BrowseItem.scss"
import DashHeader from "@/components/DashTable/DashHeader/DashHeader";
import Image from "next/image";
import { useRouter } from "next/router";

const BrowseItem = ({ projectData, order }) => {


    const router = useRouter();

    // calculate time since posted
    const calculateTimeSincePosted = (date) => {
        const postedDate = new Date(date);
        const currentDate = new Date();
        const timeSincePosted = currentDate - postedDate;
        const timeSincePostedInDays = Math.floor(timeSincePosted / (1000 * 60 * 60 * 24));
        return timeSincePostedInDays;
    }


    // Provide default values if projectData is not provided
    projectData = {
        status: order.status,
        imageSrc: "/Images/img-2.jpg",
        title: order.title,
        estimate: "Estimate Budget: INR " + order.minBudget + " - INR " + order.maxBudget,
        bidsInfo: {
            bids: "34 Bids",
            averageBid: "Average Bid $2790",
            biddingEnds: "BIDDING ENDS IN 6 DAYS, 23 HOURS",
        },
        content: {
            description: order.description,
            bid: {
                editBidText: "Edit your bid",
                amount: "$3400",
                duration: "7 days",
            },
        },
        tags: ["Fashion", "Silk Embroidery", "Customise"],
        postedTime: calculateTimeSincePosted(order.date) + " days ago",
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
                    <div className="bids-button">
                        <button className="bids-button--button" onClick={
                            () => {
                                // window.location.href = `/designer/bid/${project.id}`;
                                router.push(`/designer/bid/${order.id}`);
                            }
                        }
                            style={{
                                width: "100px",
                                height: "40px",
                                borderRadius: "5px",
                                textDecoration: "none",
                            }}
                        >Place Bid</button>
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
