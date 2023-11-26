import {
    app,
    storage
} from '@/lib/firebase'
import { useState, useEffect } from 'react'
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    updateDoc,
    setDoc
} from "firebase/firestore";
import { fi } from 'date-fns/locale';
import { mapper } from '@/utils/mapper';

const db = getFirestore(app);

function chat() {

    const [messages, setMessages] = useState([])
    const docRef = collection(db, "chats");

    const handleSend = async () => {
        const newChat = {
            message: messages
        }
        await setDoc(doc(db, "chats", "chat1"), newChat).then(() => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    return (
        <div>
            <input type="text" onChange={(e) => setMessages(e.target.value)} />
            <button onClick={handleSend}>Send</button>
        </div>
    )
}

export default chat