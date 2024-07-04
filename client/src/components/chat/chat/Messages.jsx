import { useContext, useState, useEffect } from "react";

import {AccountContext} from "../../../context/AccountProvider";

import { getMessage, newMessage } from "../../../service/api";

import Footer from "./Footer";
import Message from "./Message";

const styleMessageContainer = {
    backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
    backgroundSize: "50%"
}

const styleChatBackground = {
    height: "82vh",
    overflowY: "scroll",
}

const styleConversion = {
    padding: "1px 80px"
}

const Messages = ({person, conversation}) => {

    const {account} = useContext(AccountContext);
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag]);

    const sendText = async (e) => {
        const code =  e.keyCode || e.which;
        if(code === 13){
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value
            }
            
            await newMessage(message);
            setValue("");
            setNewMessageFlag(prev => !prev);
        }
    }

    return (
            <div style={styleMessageContainer}>
                <div style={styleChatBackground}>
                    {
                        messages && messages.map(message => (
                            <div style={styleConversion}>
                                <Message message={message}/>
                            </div>
                        ))
                    }
                </div>
                <Footer sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile}/>
            </div>
    )
}

export default Messages;