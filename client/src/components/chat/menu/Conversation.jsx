import { styled } from "@mui/material";

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

    return (
        <>
            <div style={IntroComponent}>
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