import { Link } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";
import {useStste, useEffect} from "react";



 const Comments = (props) => {

    return (
<Container>
   <SideBar/>
    <Content>
    <h1><hr/>Comments </h1>
    <Link to='/home'>back</Link>
<textarea placeholder="if you have any cotmments type here."/>
    </Content>
    </Container>
    );
 };

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
z-index:1;
 h1{
    top:200px;
    left:100px;
    color:white;
    position: absolute;
    margin: 40px;
    text-transform: uppercase;
 }
 a{
   padding: 26px;
   margin-top: 500px;
   color:whitesmoke;
   position:relative;

 }
 textarea{
   border:solid 1px;
   z-index:1;
  top:250px;
   width:300px;
   height: 200px;
  // padding-top: 30px;
  margin: 80px;
  
 }
 `;
 export default Comments;
