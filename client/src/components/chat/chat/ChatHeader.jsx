import { useContext } from "react";

import { styled } from "@mui/system";

import { Search, MoreVert } from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";

const styleHeader = {
    height: "45px",
    backgroundColor: "#ededed",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
}

const Image = styled("img")`
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 50%;
`

const styleName = {
    marginLeft: "12px"
}

const styleStatus = {
    marginLeft: "12px",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.6)",
    marginTop: "-12px"
}

const styleRight = {
    marginLeft: "auto",
}

const styleSearchMoreVert = {
    padding: "8px",
    fontSize: "24px",
    color: "#000"
}

const ChatHeader = ({person}) => {

    const {activeUsers} = useContext(AccountContext);
    
    return (
        <div style={styleHeader}>
            <Image src={person.picture} alt="dp" />
            <div>
                <p style={styleName}>{person.name}</p>
                <p style={styleStatus}>{activeUsers?.find(user => user.sub === person.sub) ? "online" : "offline"}</p>
            </div>
            <div style={styleRight}>
                <Search style={styleSearchMoreVert} />
                <MoreVert style={styleSearchMoreVert} />
            </div>
        </div>
    )
}

export default ChatHeader;