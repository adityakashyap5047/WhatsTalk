import { Dialog } from "@mui/material";
import Menu from "./menu/Menu.jsx";
import EmptyChat from "./chat/EmptyChat.jsx";
import ChatBox from "./chat/ChatBox.jsx";

const styleDialog = {
    height: "95%",
    margin: "20px",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    borderRadius: 0,
    overflow: "hidden"
}

const styleChat = {
    display: "flex",
}

const styleLeftComponent = {
    minWidth: "450px"
}

const styleRightComponent = {
    width: "73%",
    minWidth: "300px",
    height: "100%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.14)"
}

export default function ChatDialog() {
    return (
        <Dialog open={true} PaperProps={{ sx: styleDialog}} hideBackdrop={true} maxWidth={"md"}>
            <div style={styleChat}>
                <div style={styleLeftComponent}>
                    <Menu/>
                </div>
                <div style={styleRightComponent}>
                    {/*<EmptyChat/>*/}
                    <ChatBox/>
                </div>
            </div>
        </Dialog>
    );
}