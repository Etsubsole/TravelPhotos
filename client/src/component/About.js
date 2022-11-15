import { Link } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";


const About = (props) => {

    return (
<Container>
    <SideBar/>
<Content>
<h1><hr style={{marginBottom:"20px" ,border: "solid #146925 4px",boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}/>About Travel Photos webPage</h1><br/>
<p>On this website, you can find photos and videos of travelers from all over the world.There is a description related to the photos and videos, so you can know what wonderful things there are in the countries.Also, if you plan to come to Ethiopia in the future, you can contact us because we are going to establish a travel agent Ethiopia.
    In addition, if you have seen something on this website that you have admired, or if you have any ideas that you would like to see on this website, please leave a <a href='/comment' style={{color:"blue"}}>~comment~</a> on this page. 
    
</p>
<Link to="/home">back</Link>
    </Content>
</Container>

    )
}
const Container = styled.div`

`;
 const Content = styled.div`
 display:flex;
 justify-content: center;
 align-items: center;
 background: rgb(10, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 20px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
margin-left:100px;
margin-right:100px;
a{
color:white;
padding:25px;
margin-top: 550px;
}
p{
    margin-top: 190px;
    color:black;
    padding: 25px;
    background-color: lightgrey;
    width: 500px;
    border: 15px solid #146925;
    padding: 50px;
    margin-left: -80px;
    z-index: 1;
  
}

h1{
   text-transform:uppercase;
    color:#146925;
    background-color: lightgrey;
  width: 300px;
  border: 15px solid #146925;
  padding: 50px;
  margin: 20px;
  margin-left:-30px
}
@media (max-width: 480px) {
          transform: scaleX(0.73);
  }

 `;
export default About;