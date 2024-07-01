import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { styled } from "@mui/material";

const styleImageContainer = {
    display: "flex",
    justifyContent: "center",
}

const Image = styled('img')({
    height: 200,
    width: 200,
    borderRadius: "50%",
    padding: "25px 0"
});

const styleProfile = {
    backgroundColor: "#fff",
    padding: "12px 30px 2px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
}

const styleName = {
    fontSize: "13px",
    color: "#009688",
    fontWeight: 200
}

const styleYourName = {
    margin: "14px 0",
    color: "#4A4A4A"
}

const styleDescription = {
    padding: "15px 20px 28px  30px"
}

const styleDescriptionText = {
    fontSize: "14px",
    color: "#8696a0"
}



const Profile = () => {

    const {account} = useContext(AccountContext);

    return (
        <>
            <div style={styleImageContainer}>
                <Image src={account.picture} alt="dp" />
            </div>
            <div style={styleProfile}>
                <p style={styleName}>Your Name</p>
                <p>{account.name}</p>
            </div>
            <div style={styleDescription}>
                <p style={styleDescriptionText}>This is not your username or pin. This name will be visible to your WhatsTalk contacts.</p>
            </div>
            <div style={styleProfile}>
                <p>About</p>
                <p>Always believe in your self</p>
            </div>
        </>
    )
}

export default Profile;