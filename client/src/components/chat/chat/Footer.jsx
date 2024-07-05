import { useEffect } from "react";

import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

import { uploadFile } from "../../../service/api";

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

const Footer = ({sendText, setValue, value, file, setFile, setImage}) => {

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file]);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <div style={styleFooterContainer}>
            <EmojiEmotionsOutlined style={styleFooterComponent}/>
            <label htmlFor="inputFile">
                <StyledAttachFile style={styleFooterComponent}/>
            </label>
            <input type="file" id="inputFile" onChange={(e) => onFileChange(e)} style={{display: "none"}}/>
            <Search style={styleFooterComponent}>
                <InputField placeholder="Type a message" onChange={(e) => setValue(e.target.value)} onKeyPress={(e) => sendText(e)} value={value}/>
            </Search>
            <Mic style={styleFooterComponent}/>
        </div>
    )
}

export default Footer;