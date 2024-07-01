import { useContext, useState } from "react"
import { styled } from "@mui/system";
import { AccountContext } from "../../../context/AccountProvider";
import ChatIcon from '@mui/icons-material/Chat';
import UpdateIcon from '@mui/icons-material/Update';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const styleHeader = {
    height: "44px",
    backgroundColor: "#ededed",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
}

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: "50%"
});

const styleIconBox = {
    marginLeft: "auto",
}

const styleIcon = {
    marginLeft: "2px",
    padding: "8px",
    color: "#000"
}

const styleIconMessage = {
    marginLeft: "2px",
    padding: "8px",
    color: "#000",
    fontSize: "22px",
    margin: "3px 8px 0 8px"
}

export default function Header() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {account} = useContext(AccountContext);
    
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <div style={styleHeader}>
                <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()}/>
                <div style={styleIconBox}>
                    <UpdateIcon style={styleIcon}/>
                    <ChatIcon style={styleIconMessage}/>
                    <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </div>
            </div>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}