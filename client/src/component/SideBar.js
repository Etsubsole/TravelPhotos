import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
//import { IconButton } from "@mui/material";
import { readUserss } from "../Function";

const SideBar = (props) => {

const [users,setUsers] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const result = await readUserss();
      console.log(result);
      setUsers(result);
      
      return result;
    }
    fetchData();
  }, [])

return (
    <Container>
        <Side>
<MenuIcon fontSize="inherit"className="mi" />
<DropDownn>
    
    <Link to='/home'>HOME</Link><br/>
   
  <Link to='/signup'>SIGN UP</Link><br/>
    <Link to='/about'>ABOUT</Link><br/>
    
    <Link to='/comments'> comments</Link><br/>
    
    <Link to='/contactus'>contactus</Link><br/>
    <SignOut href='/'>
  
  <UserImg src="images/tinder.png" alt="!!!" />
  <DropDown>
    <span ><Link to='/'>Sign out</Link></span><br/>
    <span><Link to='/myaccount'>Myaccount</Link></span><br/>

  </DropDown>

</SignOut>

</DropDownn>
</Side>
    </Container>
)
}
const DropDownn = styled.div`
  position: absolute;
  top: 48px;
  left: 10px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  a{
    text-decoration:underline;
    letter-spacing: 4px;
    line-height: 1.5;
    &:hover{
        text-decoration:none;
        font-weight:bold;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border:#bebebe solid 1px;
    }
    &:visited {color:inherit;
    } 
    &:active {color:#bebebe;
    text-decoration:overline;
    }
    
  }
`;
const Side = styled.div`
position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration:underline;
  .mi {
    border-radius: 50%;
    width: 100%;
    height: 100%;
   
  }
  &:hover {
    ${DropDownn} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
const Container =styled.div`
margin-left: 10px;
top:80px;
bottom:600px;
padding: 2px;
display:flex;
position:absolute;
/* align-items: center;
justify-content:center; */
z-index: 3;


`;

const UserImg = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  left: 20px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  a{
    &:hover,&:visited{
color:whitesmoke;
font-weight: bolder;
    }
  }
  

`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: white;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
  @media (max-width: 768px) {
          transform: scaleX(0.7);
  }
`;


export default SideBar;