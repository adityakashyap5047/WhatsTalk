import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/system';

const styleSearch = {
    backgroundColor: "#fff",
    hieght: "45px",
    borderBottom: "1px solid #f2f2f2",
    displat: "flex",
    alignItems: "center"
}

const styleSearchBox = {
    backgroundColor: "#f0f2f5",
    position: "relative",
    margin: "8px 13px",
    borderRadius: "10px"
}

const styleIcon = {
    position: "absolute",
    height: "100%",
    padding: "6px 10px",
    color: "#919191"
}

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    height: 15px;
    font-size: 14px;
`

export default function Search() {
    return(
        <>
            <div style={styleSearch}>
                <div style={styleSearchBox}>
                    <div style={styleIcon}>
                        <SearchIcon fontSize='small'/>
                    </div>
                    <InputField placeholder='Search or start new chat'/>
                </div>
            </div>
        </>
    );
}