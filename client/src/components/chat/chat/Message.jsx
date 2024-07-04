import { useContext } from "react"

import { formatDate } from "../../../utils/commonUtils"
import { AccountContext } from "../../../context/AccountProvider"

const styleSentMessage = {
    background: "#dcf8c6",
    maxWidth: "60%",
    margin: "0 0 0 auto",
    padding: "5px",
    width: "fit-content",
    display: "flex",
    borderRadius: "10px",
    wordBreak: "break-word"
}

const styleReceivedMessage = {
    background: "#fff",
    maxWidth: "60%",
    margin: "0 auto 0 0",
    padding: "5px",
    width: "fit-content",
    display: "flex",
    borderRadius: "10px",
    wordBreak: "break-word"
}

const styleText = {
    fontSize: "14px",
    padding: "0 25px 0 5px"
}

const styleTime = {
    fontSize: "10px",
    color: "#919191",
    marginTop: "auto",
    wordBreak: "keep-all"
}

const Message = ({message}) => {

    const {account} = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ? 
                    <div style={styleSentMessage}>
                        <div style={styleText}>{message.text}</div>
                        <div style={styleTime}>{formatDate(message.createdAt)}</div>
                    </div> 
                : 
                    <div style={styleReceivedMessage}>
                        <div style={styleText}>{message.text}</div>
                        <div style={styleTime}>{formatDate(message.createdAt)}</div>
                    </div>
            }
            
        </>
    )
}

export default Message;