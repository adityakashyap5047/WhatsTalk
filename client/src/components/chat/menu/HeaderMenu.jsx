import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function HeaderMenu() {
    const [open, setOpen] = useState(null);

    const styleMenuOption = {
        fontSize: "14px",
        padding: "15px 60px 5px 24px",
        color: "#4a4a4a",
    }

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    return (
        <>
            <MoreVertIcon onClick={handleClick} style={{paddingBottom: "7px"}}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <MenuItem onClick={handleClose} style={styleMenuOption}>New group</MenuItem>
                <MenuItem onClick={handleClose} style={styleMenuOption}>Archived</MenuItem>
                <MenuItem onClick={handleClose} style={styleMenuOption}>Starred message</MenuItem>
                <MenuItem onClick={handleClose} style={styleMenuOption}>Setting</MenuItem>
                <MenuItem onClick={handleClose} style={styleMenuOption}>Log out</MenuItem>
            </Menu>
        </>
    );
}