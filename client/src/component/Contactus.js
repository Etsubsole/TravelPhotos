import styled from "styled-components";
import SideBar from "./SideBar";
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CommentIcon from '@mui/icons-material/Comment';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
const Contactus = (props) => {

    return (
        <Container>
<SideBar/>
<Content>
    <Link to='/home'><IconButton className="i">
        <ReplayIcon/>
    </IconButton></Link>
    <h1>You can contact us by ...</h1>
    <Address>
        <a href="http://facebook.com/etusbsole"><FacebookIcon fontSize="large"/> <br/>Facebook</a>
        <a href="http://telegram.com/@etsubbbbb" target="_blank"><TelegramIcon fontSize="large"/><br/>Telegram</a>
        <a><TwitterIcon fontSize="large"/><br/>Twitter</a>
        <a><CommentIcon fontSize="large"/><br/>Messanger</a>
        <a><EmailIcon fontSize="large"/><br/>Email</a>
        <a><PhoneIcon fontSize="large"/><br/>Phone</a>
        <a><InstagramIcon fontSize="large"/><br/>Instagram</a>
    </Address>
</Content>
        </Container>
    )
}
const Container = styled.div`
`;
const Content = styled.div`
h1 {
position: absolute;
z-index:3;
margin-top: 250px;
margin-left:350px;
color:#11452d;
text-decoration:overline;
}
.i{
    position: absolute;
z-index:3;
margin-top: 245px;
margin-left:300px;
color:white;
&:hover{
    transform:scale(1.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    opacity:0.5;
}
}

`;

const Address = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
text-decoration:overline;
margin-left:100px;
margin-right:100px;
background: rgb(10, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 20px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
a{
    color:white;
    margin-top:300px;
    margin-bottom:auto;
    padding: 50px;
    flex-wrap:nowrap;
    
    &:hover{
        //color:#11452d;
        transform:scale(1.1);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      opacity:0.5;
    }
}
&:hover{
    transform:scale(1.02);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border:#bebebe solid;
    

}

`;
export default Contactus;