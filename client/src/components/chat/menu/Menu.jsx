import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

export default function Menu() {
    return(
        <>
            <div>
                <Header/>
                <Search/>
                <Conversations/>
            </div>
        </>
    );
}