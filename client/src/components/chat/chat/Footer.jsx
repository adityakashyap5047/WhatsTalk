import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

const styleFooterContainer = {
    height: "50px",
    background: "#ededed",
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "0 15px"
}

const styleFooterComponent = {
    margin: "5px",
    color: "#919191"
}

const StyledAttachFile = styled(AttachFile)`
    transform: rotate(40deg)
`

const Search = styled(Box)`
    background-color: #fff;
    border-radius: 18px;
    width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`

const Footer = ({sendText, setValue, value}) => {

    return (
        <div style={styleFooterContainer}>
            <EmojiEmotionsOutlined style={styleFooterComponent}/>
            <StyledAttachFile style={styleFooterComponent}/>
            <Search style={styleFooterComponent}>
                <InputField placeholder="Type a message" onChange={(e) => setValue(e.target.value)} onKeyPress={(e) => sendText(e)} value={value}/>
            </Search>
            <Mic style={styleFooterComponent}/>
        </div>
    )
}

export default Footer;