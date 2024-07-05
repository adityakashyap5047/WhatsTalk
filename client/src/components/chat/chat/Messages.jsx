import { useContext, useState, useEffect, useRef } from "react";

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

    const {account, socket} = useContext(AccountContext);
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [image, setImage] = useState("");
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({transition: "smooth"});
    }, [messages])

    useEffect(() => {
        socket.current.on("getMessage", (data) => {
            setIncomingMessage({...data, createdAt: Date.now()});
        })    
    }, [])

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages(prev => [...prev, incomingMessage]);
    }, [incomingMessage, conversation]);

    const sendText = async (e) => {
        const code =  e.keyCode || e.which;
        if(code === 13){
            let message
            if(!file){
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            }  else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }      
            
            socket.current.emit("sendMessage", message);
            
            await newMessage(message);
            setValue("");
            setFile("");
            setImage("");
            setNewMessageFlag(prev => !prev);
        }
    }

    return (
            <div style={styleMessageContainer}>
                <div style={styleChatBackground}>
                    {
                        messages && messages.map(message => (
                            <div style={styleConversion} ref={scrollRef}>
                                <Message message={message}/>
                            </div>
                        ))
                    }
                </div>
                <Footer sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage}/>
            </div>
    )
}

export default Messages;