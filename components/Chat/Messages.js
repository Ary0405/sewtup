import React,{ useState } from 'react';
import styles from './Messages.module.scss'; // Import your SCSS file for styling

const Messages = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.Chat} ${isOpen ? styles.open : ''}`}>
            <button className={styles.toggleButton} onClick={toggleChat}>
                Messages
            </button>
            <div className={styles.messagesContainer}>
                {/* Your chat messages go here */}
                {/* You can use a library like react-chat-widget for more advanced features */}
            </div>
        </div>
    );
};

export default Messages;
