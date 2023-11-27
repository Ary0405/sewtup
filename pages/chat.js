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
    setDoc,
    arrayUnion
} from "firebase/firestore";
import { fi } from 'date-fns/locale';
import { mapper } from '@/utils/mapper';

const db = getFirestore(app);

export async function getServerSideProps(context) {
    if (context.req.session.user === undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
        };
    }

    const user = context.req.session.user;

    return {
        props: { user: user }
    }
}

function chat({ user }) {

    const [messages, setMessages] = useState([])
    const [user1, setUser1] = useState(user.id)
    const [user2, setUser2] = useState(0)
    const [chatRef, setChatRef] = useState(mapper(user1, user2))

    useEffect(() => {
        setChatRef(mapper(user1, user2))
    }, [user2])

    const handleSend = async () => {
        const newChat = {
            message: messages
        }
        // await setDoc(doc(db, "chats", chatRef), newChat).then(() => {
        //     console.log("Document successfully written!");
        // }).catch((error) => {
        //     console.error("Error writing document: ", error);
        // });
        await updateDoc(doc(db, "chats", chatRef), {
            messages: arrayUnion(newChat)
        }).then(() => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    }





    const setUserTwo = async (usr2) => {
        setUser2(usr2)
        setChatRef(mapper(user1, user2))
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
        }}>

            <input type="text" onChange={(e) => setMessages(e.target.value)} />
            <button onClick={handleSend}>Send</button>
            <button onClick={() => setUserTwo(1)}>Chat with user </button>
            <button onClick={() => setUserTwo(2)}>Chat with user 2</button>
            <button onClick={() => setUserTwo(5)}>Chat with user 5</button>
            <button onClick={() => setUserTwo(6)}>Chat with user 6</button>
            <button onClick={() => setUserTwo(7)}>Chat with user 7</button>
            <button onClick={() => setUserTwo(8)}>Chat with user 8</button>
            <p>you are user {user1}</p>
            <p>you are chatting with user {user2}</p>
            <p>your chat ref is {chatRef}</p>
        </div>
    )
}

export default chat

{
    /**
     * To Do:
     * Fetch all user Ids the current user is chatting with
     * then render them accordingly
     * 
     * save date and time of each chat also
     * 
     * create a good chat comp
     */
}