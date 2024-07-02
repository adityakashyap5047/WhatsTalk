import Footer from "./Footer"

const styleMessageContainer = {
    backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
    backgroundSize: "50%"
}

const styleChatBackground = {
    height: "82vh",
    overflowY: "scroll",
}

const Messages = () => {

    return (
        <div>
            <div style={styleMessageContainer}>
                <div style={styleChatBackground}>
                    
                </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Messages;