import { color, fontSize, fontWeight, styled } from "@mui/system";
import { emptyChatImage } from "../../../constants/data";
import { Divider } from "@mui/material";

const styleEmptyChat = {
    backgroundColor: "#f8f9fa",
    padding: "30px 0",
    textAlign: "center",
    height: "100vh",
}

const styleEmptyContainer = {
    padding: "0 200px",
}

const Image = styled('img')({
    width: 400,
    marginTop: 100
});

const styleTitle = {
    fontSize: "32px",
    margin: "25px 0 10px 0",
    fontFamily: "inherit",
    fontWeight: 300,
    color: "#41525d"
}

const styleSubTitle = {
    fontSize: "14px",
    color: "#667781",
    fontWeight: 400,
    fontFamily: "inherit"
}

const StyledDivider = styled(Divider)({
    margin: "40px 0",
    opacity: 0.4
})

export default function EmptyChat() {
    return (
        <div style={styleEmptyChat}>
            <div style={styleEmptyContainer}>
                <Image src={emptyChatImage} alt="empty chat image" />
                <p style={styleTitle}>WhatsTalk web</p>
                <p style={styleSubTitle}>Now send and receive and messages without keeping your phone online.</p>
                <p style={styleSubTitle}>Use WhatsTalk on up to 4 linked devices and 1 phone at the same time.</p>
                <StyledDivider/>
            </div>
        </div>
    );
}