// Bid.js
import React from "react";
import styles from "./Bid.scss";

const Bid = ({ bidData }) => {
    // Provide default values if bidData is not provided
    bidData = bidData || {
        bidder: "Xceptive Solutions LLP @Xceptive",
        rating: "4.9",
        messageCount: "204",
        currencyCount: "7.8",
        bio: "Ranked in TOP 1% on Freelancer based on reviews",
        bidTitle: "Xceptive’s Bid",
        bidAmount: "7,000.00 INR",
        bidDuration: "in 7 days",
        bidDescription: "I am thrilled to have the opportunity to design and create a custom silk outfit with exquisite embroidery for your special occasion. Your vision for an elegant and unique outfit aligns perfectly with my expertise and passion for fashion design. I am confident that I can bring your dream outfit to life..."
    };

    return (
        <div className="bidContainer">
            <div className="bidHeader">
                <div className="bidHeaderContainer">
                    <img className="bidHeaderImage" alt="" src="/frame-2060.svg" />
                    <div className="bidderInfoContainer">
                        <div className="bidderName">
                            {bidData.bidder}
                        </div>

                        <div className="bidderStatsContainer">
                            <div className="bidderRatingContainer">
                                <div className="starRating">
                                    <img className="starIcon" alt="" src="/star02.svg" />
                                    <img className="ratingIcon" alt="" src="/icon.svg" />
                                    <img className="ratingIcon" alt="" src="/icon1.svg" />
                                    <img className="ratingIcon" alt="" src="/icon2.svg" />
                                    <img className="ratingIcon" alt="" src="/icon3.svg" />
                                </div>
                                <div className="ratingValue">{bidData.rating}</div>
                            </div>
                            <div className="messageCount">
                                <img
                                    className="messageIcon"
                                    alt=""
                                    src="/messagesquare.svg"
                                />
                                <div className="statValue">{bidData.messageCount}</div>
                            </div>
                            <div className="currencyCount">
                                <img
                                    className="currencyIcon"
                                    alt=""
                                    src="/currencycoindollar.svg"
                                />
                                <div className="statValue">{bidData.currencyCount}</div>
                            </div>
                        </div>
                        <b className="bioText">
                            {bidData.bio}
                        </b>
                    </div>
                </div>
                <div className="bidInfoContainer">
                    <div className="bidTitle">{bidData.bidTitle}</div>
                    <b className="bidAmount">{bidData.bidAmount}</b>
                    <div className="bidDuration">{bidData.bidDuration}</div>
                </div>
            </div>
            <div className="bidFooter">
                <div className="bidDescriptionContainer">
                    <div className="bidDescriptionText">
                        {bidData.bidDescription}
                    </div>
                    <span className="showMoreText">more</span>
                </div>
                <div className="replyInfoContainer">
                    <div className="replyInfoText">
                        Replies within a few hours
                    </div>
                    <div className="actionButtonsContainer">
                        <button className="chatButton">
                            {/* <div className="chatIcon" /> */}
                            <div className="buttonText">Chat</div>
                        </button>
                        <button className="acceptButton">
                            <div className="acceptText">Accept</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bid;


// Usage in another component
// <Bid bidData={{
//     bidder: "Xceptive Solutions LLP @Xceptive",
//     rating: "4.9",
//     messageCount: "204",
//     currencyCount: "7.8",
//     bio: "Ranked in TOP 1% on Freelancer based on reviews",
//     bidTitle: "Xceptive’s Bid",
//     bidAmount: "7,000.00 INR",
//     bidDuration: "in 7 days",
//     bidDescription: "I am thrilled to have the opportunity to design and create a custom silk outfit with exquisite embroidery for your special occasion. Your vision for an elegant and unique outfit aligns perfectly with my expertise and passion for fashion design. I am confident that I can bring your dream outfit to life..."
// }} />
