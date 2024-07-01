import {Drawer} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const upperStyle = {
    height: "107px",
    backgroundColor: "#008069",
    color: "#fff",
    display: "flex",
}

const upperArrowStyle = {
    marginTop: "auto",
    padding: "15px",
    fontWeight: 600
}

const upperHeadingStyle = {
    marginTop: "auto",
    fontSize: "18px",
    fontWeight: 600
}

const lowerStyle = {
    backgroundColor: "#ededed",
    height: "85%",
}

const InfoDrawer = ({open, setOpen}) => {

    const drawerStyle = {
        left: 20,
        top: 19,
        height: "95%",
        width: "30%",
        boxShadow: "none"
    }

    return (
        <Drawer open={open} PaperProps={{sx: drawerStyle}} style={{zIndex: 1500}}>
            <div style={upperStyle}>
                <ArrowBackIcon onClick={() => setOpen(false)} style={upperArrowStyle}/>
                <p style={upperHeadingStyle}>Profile</p>
            </div>
            <div style={lowerStyle}>
                <Profile/>
            </div>
        </Drawer>
    )
}

export default InfoDrawer;