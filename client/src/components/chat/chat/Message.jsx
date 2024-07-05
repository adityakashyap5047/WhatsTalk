import { useContext } from "react";

import GetAppIcon from '@mui/icons-material/GetApp';

import { formatDate, downloadMedia } from "../../../utils/commonUtils";
import { AccountContext } from "../../../context/AccountProvider";
import {iconPDF} from "../../../constants/data"

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

const styleImageTime = {
    fontSize: "10px",
    color: "#919191",
    marginTop: "auto",
    wordBreak: "keep-all",
    position: "absolute",
    bottom: "0",
    right: "0"
}

const Message = ({message}) => {

    const {account} = useContext(AccountContext);

    const extensions = /\.(jpg|jpeg|png|pdf|webp|gif|bmp|tiff|svg|doc|docx|xls|xlsx|ppt|pptx|txt|rtf|html|htm|css|js|json|xml|csv|mp3|wav|ogg|mp4|avi|mkv|mov|wmv|flv|zip|rar|tar|gz|7z)$/i;

    return (
        <>
            {
                account.sub === message.senderId ? 
                    <div style={styleSentMessage}>
                        {
                           extensions.test(message.text) ? <ImageMessage message={message}/> : <TextMessage message={message}/>
                        }
                    </div>
                : 
                    <div style={styleReceivedMessage}>
                        {
                           extensions.test(message.text)  ? <ImageMessage message={message}/> : <TextMessage message={message}/>
                        }
                    </div>
            }
            
        </>
    )
}

const ImageMessage = ({message}) => {
    return (
        <div style={{position: "relative"}}>
            {
                message?.text?.includes(".pdf") ?
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={iconPDF} alt="pdf" style={{width: "80px"}} />
                        <div style={{fontSize: 14}}>{message.text.split('/').pop()}</div>
                    </div>
                :
                    <img style={{width: 300, height: "100%", objectFit: "cover"}} src={message.text} alt={message.text}/>
            }
            <div style={styleImageTime}><GetAppIcon onClick={(e) => downloadMedia(e, message.text)} style={{marginLeft: 10, border: "1px solid grey", borderRadius: "50%"}} fontSize="small"/>{formatDate(message.createdAt)}</div>
        </div>
    )
}

const TextMessage = ({message}) => {
    return (
        <>
            <div style={styleText}>{message.text}</div>
            <div style={styleTime}>{formatDate(message.createdAt)}</div>
        </>
    )
}

export default Message;