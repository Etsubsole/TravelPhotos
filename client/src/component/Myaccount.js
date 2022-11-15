import styled from "styled-components";
import Posted from "./Posted";
import SideBar from "./SideBar";
import Favorite from "./Favorite";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import {useState,useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { createPost, readPosts } from "../Function";
import { ContextProvider,Context } from '../Context';
import FileBase64 from 'react-file-base64';



const Myaccount = (props) => {
  const [name,setName] = useContext(Context);
//const {name} = useContext(Context);
  const [post, setPost] = useState([{
title:"",
discription:"",
imgUrl:"",
name:""
  }])
const [posts, setPosts] =useState(null)

  
  const [click, setClick] = useState(false);
const clicked = () => {
  setClick(true);
}
const navigate = useNavigate();
useEffect(() => {
  const fetchData = async () => {
    const result = await readPosts();
    console.log(result);
    setPosts(result);
    
    return result;
  }
  fetchData();
}, [])


const onSubmitHandler = async (e) => {
  e.preventDefault();
 
  
  const result =await createPost(post);
  console.log(result)
  if(!result){
  navigate("/myaccount")
  }
  else{setPosts([...posts, post]);
    //setPost([...post,name]);
  navigate("/home")
  console.log(post)
  console.log(posts)}
  
    //alert(response.data);
  }
  return (
    <Container>
      <SideBar />
      <Content>
      
         {click?<form onSubmit={onSubmitHandler}>
          <fieldset>add new photos
            <input type="file" 
            name="text"
            onChange={e=>setPost({...post,imgUrl:e.target.value})}/>
             {/* <FileBase64
        multiple={ false }
        onDone={ ({base64})=> setPost({...post,imgUrl:base64})} /> */}
            <br/>name<input type="text" 
            name="text"
           placeholder="enter the correct username"
            //value={name}
            onChange={e=>setPost({...post,name:e.target.value})}
            //style={{background:"",borderRadius:"20px",cursor:"pointer"}}
            />
            <br/>title<textarea 
                        onChange={e=>setPost({...post,title:e.target.value})}

            style={{padding:"20px",marginTop:"20px",width:"20%",borderRadius:"20px"}}></textarea>
            <br/>description<textarea
                        onChange={e=>setPost({...post,discription:e.target.value})}
 
            style={{padding:"20px",marginTop:"20px",width:"50%",borderRadius:"20px"}}></textarea>


            <input type="submit" name="submit" style={{margin:"20px",borderRadius:"20px"}}/>
          </fieldset>
        </form>:<div><a>back</a>
        
        <ContextProvider value={name}>
        <Posted />

        </ContextProvider>
        <Favorite />
         <h4>Add new post</h4>
         <IconButton onClick={clicked}>
          <AddIcon style={{ color: "white" }} />
        </IconButton>
         </div>
}
      </Content>
    </Container>
  )
};
const Container = styled.div`
 
`;
const Content = styled.div`
position: relative;
  min-height: calc(100vh-250px);
 overflow-x: hidden;
  display: block;
  top: 100px;
  padding: 5 calc(3.5vw + 5px);
  align-items:center;
justify-content: center;
background: rgb(10, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 20px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
margin-left: 150px;
margin-right: 150px;
padding:40px;
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;}
a{
    margin-top:500px;
}
h4{
  color:white;
  position: relative;
  
} 
form{
  color:white;


}

`;
export default Myaccount;