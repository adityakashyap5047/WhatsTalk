import { useState } from "react";

import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

export default function Menu() {

    const [text, setText] = useState("");

    return(
        <>
            <div>
                <Header/>
                <Search setText={setText}/>
                <Conversations text={text}/>
            </div>
        </>
    );
}