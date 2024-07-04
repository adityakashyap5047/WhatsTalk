import { useContext, useEffect, useState } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {

    const {person, account} = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(() => {
        const getConversationDetail = async () => {
            let data = await getConversation({senderId: account.sub, receiverId: person.sub});
            setConversation(data);
        }
        getConversationDetail();
    }, [person.sub]);

    return (
        <div>
            <ChatHeader person={person}/>
            <Messages person={person} conversation={conversation}/>
        </div>
    )
}

export default ChatBox;