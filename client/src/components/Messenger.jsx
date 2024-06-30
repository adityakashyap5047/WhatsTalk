import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog"
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const styleMessenger = {
    height: "100vh",
    backgroundColor: "#DCDCDC"
}

const styleLoginHeader = {
    height: "220px",
    backgroundColor: "#00bfa5",
    boxShadow: "none"
}

const styleChatHeader = {
    height: "125px",
    backgroundColor: "#00A884",
    boxShadow: "none"
}

export default function Messenger() {
    const {account} = useContext(AccountContext);

    return (
        <div style={styleMessenger}>
            {account ? 
                <>
                    <AppBar style={styleChatHeader}>
                    <Toolbar>
                    </Toolbar>
                    </AppBar>
                    <ChatDialog/>
                </>: 
                <>
                    <AppBar style={styleLoginHeader}>
                    <Toolbar>
                    </Toolbar>
                    </AppBar>
                    <LoginDialog/>
                </>
            }
        </div>
    );
}