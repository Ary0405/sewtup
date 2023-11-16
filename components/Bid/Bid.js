import './Bid.scss';

const Bid = ({ bidData }) => {
    // Provide default values if bidData is not provided
    bidData = bidData || {
        bidderName: "Xceptive Solutions LLP @Xceptive",
        rating: "4.9",
        messageCount: "204",
        currencyCount: "7.8",
        bio: "Ranked in TOP 1% on Freelancer based on reviews",
        bidTitle: "Xceptive’s Bid",
        bidAmount: "7,000.00",
        bidDuration: "7",
        bidDescription: "I am thrilled to have the opportunity to design and create a custom silk outfit with exquisite embroidery for your special occasion. Your vision for an elegant and unique outfit aligns perfectly with my expertise and passion for fashion design. I am confident that I can bring your dream outfit to life..."
    };

    return (
        <div className="bidContainer">
            <div className="bidHeader">
                <img className="bidHeaderImage" alt="" src="/frame-2060.svg" />
                <div className="bidHeaderContainer">
                    <div className="bidderName">
                        {bidData.bidderName}
                    </div>
                    <div className="bidderStatsContainer">
                        <div className="starRating">
                            {[...Array(Math.round(bidData.rating))].map((_,i) => (
                                <img key={i} className="ratingIcon" alt="" src="/icon.svg" />
                            ))}
                        </div>
                        <div className="ratingValue">{bidData.rating}</div>
                        <img className="messageIcon" alt="" src="/messagesquare.svg" />
                        <div className="statValue">{bidData.messageCount}</div>
                        <img className="currencyIcon" alt="" src="/currencycoindollar.svg" />
                        <div className="statValue">{bidData.currencyCount}</div>
                    </div>
                    <b className="bioText">
                        {bidData.bio}
                    </b>
                </div>
                <div className="bidInfoContainer">
                    <div className="bidTitle">{bidData.bidTitle}</div>
                    <b className="bidAmount">{bidData.bidAmount} INR</b>
                    <div className="bidDuration">in {bidData.bidDuration} days</div>
                </div>
            </div>
            <div className="bidFooter">
                <div className="bidDescriptionText">
                    {bidData.bidDescription}
                    <span className="showMoreText">more</span>
                </div>
                <div className="responseContainer">
                    <div className="replyInfoText">
                        Replies within a few hours
                    </div>
                    <div className="actionButtonsContainer">
                        <button className="chatButton">
                            <span className="dot"> • </span>
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
//     bidderName: "Xceptive Solutions LLP @Xceptive",
//     rating: "4.9",
//     messageCount: "204",
//     currencyCount: "7.8",
//     bio: "Ranked in TOP 1% on Freelancer based on reviews",
//     bidTitle: "Xceptive’s Bid",
//     bidAmount: "7,000.00",
//     bidDuration: "7",
//     bidDescription: "I am thrilled to have the opportunity to design and create a custom silk outfit with exquisite embroidery for your special occasion. Your vision for an elegant and unique outfit aligns perfectly with my expertise and passion for fashion design. I am confident that I can bring your dream outfit to life..."
// }} />
