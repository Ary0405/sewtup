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
import { enIN } from 'date-fns/locale';
import { mapper } from '@/utils/mapper';
import { getConversations } from '@/services/user.service';
import { isUserInConvos } from '@/services/user.service';

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
    const userId = user.id;

    const userConversations = await getConversations(userId)
    // isUserInConvos(2,4).then((res) => {
    //     console.log(res)
    // }
    // ).catch((err) => {
    //     console.log(err)
    // })

    return {
        props: { user: user, userConversations: userConversations },
    }
}

function chat({ user, userConversations }) {

    const [messages, setMessages] = useState([])
    const [user1, setUser1] = useState(user.id)
    const [user2, setUser2] = useState(0)
    const [chatRef, setChatRef] = useState(mapper(user1, user2))
    const [conversations, setConversations] = useState(userConversations.conversations)

    useEffect(() => {
        setChatRef(mapper(user1, user2))
    }, [user2])

    // useEffect(() => {
    //     localStorage.setItem("conversation", conversations)
    // }, [])


    const handleSend = async () => {
        const newChat = {
            message: messages,
            ts: new Date(),
            sender: user1
        }

        /**
         * Problem:
         * First chat should be craeted with setDoc
         * and then the rest should be added with updateDoc
         */

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
            <p>you are user {user1}</p>
            <p>you are chatting with user {user2}</p>
            <p>your chat ref is {chatRef}</p>

            {
                conversations.map((conversation) => {
                    return (
                        <div key={conversation}>
                            <button onClick={() => setUserTwo(conversation)}>Chat with user {conversation}</button>
                        </div>
                    )
                })
            }
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