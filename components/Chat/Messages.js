import { useState } from 'react';
import "./Messages.scss"

const Messages = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`Chat ${isOpen ? 'open' : ''}`}>
            <button className={`toggleButton ${isOpen ? 'rotateArrow' : ''}`} onClick={toggleChat}>
                Messages
            </button>
            <div className="messagesContainer">
                {/* Your chat messages go here */}
                {/* You can use a library like react-chat-widget for more advanced features */}
            </div>
        </div>
    );
};

export default Messages;
