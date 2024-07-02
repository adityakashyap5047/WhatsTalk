import { styled } from "@mui/material";
import { useContext } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../service/api";

const IntroComponent = {
    display: "flex",
    height: "45px",
    padding: "13px 0",
    cursor: "pointer",
}

const Image = styled('img')({
    height: 50,
    width: 50,
    borderRadius: "50%",
    padding: "0 14px",
});

const Conversations = ({user}) => {

    const {setPerson, account} = useContext(AccountContext);

    const getUser = async () => {
        setPerson(user);
        await setConversation({senderId: account.sub, receiverId: user.sub})
    }

    return (
        <>
            <div style={IntroComponent} onClick={() => getUser()}>
                <div>
                    <Image src={user.picture} alt="user image" />
                </div>
                <div>
                    <p>{user.name}</p>
                </div>
            </div>
        </>
    )
};

export default Conversations;