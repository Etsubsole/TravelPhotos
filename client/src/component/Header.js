
import styled from "styled-components";

//import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const Header = (props) =>{
  return (
 <Nav>
  <Logo href='/'>
  <img src="/images/logooo.png" alt="Travlers+" />
  </Logo>
  <Search>
    
<IconButton>
  <SearchIcon className="si"/>
  </IconButton>
  
  <input type="text" placeholder='what do you want to search for?'/>

  </Search>
  <Login href='/auth'>LOGIN</Login>
 {/* { window.location.pathname !== "/" && window.location.pathname !=="/auth" && window.location.pathname !=="/signup"? */}
 
  {/* } */}
 </Nav>
  );
};
const Nav = styled.nav`
position : fixed;
background-color: rgb(1, 1, 1);
display:flex;
align-items: center;
justify-content: space-between;
width:100%;
height: 60px;
z-index:3;
@media (max-width: 480px) {
         
          justify-content: center;
  }

`;
const Logo = styled.a`
  margin-left:25px;
  position:relative;
  display: inline-block;

   img {
      display:block;
      height: 100px;
       width:100px;

     &:hover {
  cursor: pointer;
  opacity: 0.5;
}
   }
   @media (max-width: 480px) {
          transform: scaleX(0.7);
  }
`;
const Search = styled.div`


.si{
  color:whitesmoke;
  position: absolute;
  &:hover{
    transform:scale(1.5);
  }
}
input{
  border-radius: 6px;

   &:hover{
         transform: scaleX(1.03);
     
       
         }}
         @media (max-width: 768px) {
          transform: scaleX(0.7);
  }

`;
const Login = styled.a`
display: block;
border:solid 2px dimgray;
border-radius: 4px;
font-weight:1px;
color: whitesmoke;
letter-spacing:7px;
padding:  5px 3px 5px 5px;
margin-right:25px;
transition: all 0.2s ease 0s;
text-decoration: none;
/* top:0;
bottom:0;
left:0;
right:25px; */


      &:hover {
        background-color:whitesmoke;
        color:black;
        cursor:pointer;
         transform: scale(1.05);
         border-color:whitesmoke;
} 
@media (max-width: 768px) {
  letter-spacing:1px;
  
          transform: scaleX(0.7);
  
  }

`;

export default Header;