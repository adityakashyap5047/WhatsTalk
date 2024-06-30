import {Dialog, List, ListItem, styled} from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const styleDialog = {
    height: "96%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}

const styleLogin = {
    display: "flex",
}

const styleLoginProcess = {
    padding: "56px 0 56px 56px"
}

const StyleLoginQRCode = styled('img')({
    height: 264,
    width: 264,
    margin: "50px 0 0 50px",
});

const styleTitle = {
    fontSize: "26px",
    color: "#525252",
    fontWeight: "300",
    fontFamily: "inherit",
    marginBottom: "65px"
}

const styleListItem = {
    padding: "0",
    marginTop: "15px",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#4a4a4a"
}

const styleGoogleQR = {
    position: "relative",
}

const styleGoogleAuth = {
    position: "absolute",
    top: "50%",
    transform: 'translateX(17%)',
}

export default function LoginDialog() {

    const {setAccount} = useContext(AccountContext);

    const onLoginSucess = (res) => {
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
    }

    const onLoginFailed = (res) => {
        console.log(`Login Failed: ${res}`)
    }

    return(
        <>
            <Dialog open={true} PaperProps={{ sx: styleDialog}} hideBackdrop={true}>
                <div style={styleLogin}>
                    <div style={styleLoginProcess}>
                        <p style={styleTitle}>To use WhatsTalk on your computer:</p>
                        <List>
                            <ListItem style={styleListItem}>1. Open WhatsTalk on your phone</ListItem>
                            <ListItem style={styleListItem}>2. Tap&nbsp;<b> Menu &#x22EE;</b>&nbsp;or&nbsp;<b>Setting &#x2699;</b>&nbsp;and select&nbsp;<b>Linked Devices</b></ListItem>
                            <ListItem style={styleListItem}>3. Point your phone to this screen to capture the code</ListItem>
                        </List>
                    </div>
                    <div style={styleGoogleQR}>
                        <StyleLoginQRCode src={qrCodeImage} alt="qr code" />
                        <div style={styleGoogleAuth}><GoogleLogin onSuccess={onLoginSucess} onError={onLoginFailed}/></div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}