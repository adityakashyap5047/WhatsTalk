import { useContext } from "react";

import { AccountContext } from "../../../context/AccountProvider";

import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {

    const {person} = useContext(AccountContext);

    return (
        <div>
            <ChatHeader person={person}/>
            <Messages person={person}/>
        </div>
    )
}

export default ChatBox;