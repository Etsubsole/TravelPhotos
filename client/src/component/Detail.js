import {useState, useEffect,useContext} from 'react'
import styled from "styled-components";
import Preloader from "./Preloader";
import { Context } from "../Context";
import { Link ,useNavigate} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
//import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DetailsIcon from '@mui/icons-material/Details';
import {readPosts,deletePost ,createComment,readComments} from "../Function";
import CommentIcon from '@mui/icons-material/Comment';
function Detail(props) {
const navigate=useNavigate();
  const [comment,setComment]=useState({text:"",
  commenter:"",
  commentTo:""
})
const [comments,setComments]=useState(null);
    const [posts, setPosts] =useState(null);
    const [IDP,setIDP] = useContext(Context);
const [click,setClick] =useState(false);
const [click1,setClick1] =useState(false);

const clicked = () => {
  setClick(true);
}
const clicke = () => {
  setClick1(true);
}

    useEffect(() => {
  const fetchData = async () => {
    const result = await readPosts();
    console.log(result);
    setPosts(result);
    return result;
  }
  fetchData();
}, [])
useEffect(() => {
  const fetchData = async () => {
    const result2 = await readComments();
    console.log(result2);
    setComments(result2);
    return result2;
  }
  fetchData();
}, [])
console.log(IDP);
console.log(posts);
    const find =() =>{
if(!posts)
{
<Preloader/>}
else{
const filter=Object.values(posts).filter(post=> post._id=== IDP);
console.log(filter);
 setPosts(filter);
console.log(posts);
console.log(posts.imgUrl);
console.log(posts.title);
}
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
   
    const result =await createComment(comment);
    console.log(result)
    if(!result){
    navigate("/detail");
    alert("please try again");
    }
    else{setComments([...comments, comment]);
      //setPost([...post,name]);
    navigate("/home")
    console.log(comment)
    console.log(comments)
  //console.log(post.name)
  }}

  return (
    <Container>
         

<IconButton onClick={()=>{clicked();find()}} style={{color:"white",zIndex:"1",margin:"10px",position:"relative"}}>
  <DetailsIcon/>
</IconButton><h2 style={{color:"white"}}>click it</h2>
   {click?<Background  style={{backgroundImage: `url(${posts.imgUrl})` }}>
    

        {
          posts.map((post) => (
            <Wrap key={post._id}
            //onClick={() => setPostID(post._id)}
            >
             <h2 style={{color:'white',zIndex:'1'}}>{post.name}</h2><br/>
             <h4 style={{color:'white',zIndex:'1'}}>{post.discription}</h4> 
              
                <img src={post.imgUrl} alt={post.name} />
              
              <a href="javascript:location.reload();"
              onClick={() => deletePost(post._id)}>
              <IconButton>
                <DeleteIcon style={{color:'grey',zIndex:'1',position:"relative"}}/>
              </IconButton></a>
              <IconButton>
                <EditIcon style={{color:'darkgrey',zIndex:'1'}}/>
              </IconButton>
              <IconButton onClick={() => setClick1(true)}>
            <CommentIcon fontSize='large'style={{color:'darkgrey',zIndex:'1'}}/>
           </IconButton>
            </Wrap>
          ))}
        
        </Background>
        
        :console.log("click the button plz")}
{click1?<form onSubmit={onSubmitHandler}>
        <fieldset>comment
        
      
          <br/><textarea 
                      onChange={e=>setComment({...comment,text:e.target.value})}
          style={{padding:"20px",marginTop:"20px",width:"20%",borderRadius:"20px"}}></textarea>
          
         <br/><input type="text" 
          name="text"
          placeholder="commenter"
          //value={name}
          onChange={e=>setComment({...comment,commenter:e.target.value})} 
          />

<br/><input type="text" 
          name="text"
          placeholder="commentTo"
          //value={name}
          onChange={e=>setComment({...comment,commentTo:e.target.value})} 
          //style={{background:"",borderRadius:"20px",cursor:"pointer"}}
          />
          <input type="submit" name="submit" style={{margin:"20px",borderRadius:"20px"}}/>
        </fieldset>
      </form>:console.log("click it")}
    </Container>
  )
}
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: relative;
  right: 0px;
  top: 0px;
  z-index: 1;
  background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position:center;
    bottom:200px;
  img {
    width: 100vw;
    height: 100vh;
    z-index:3;
   
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const Wrap = styled.div`
  padding-top: 100%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  //cursor: pointer;
  overflow: hidden;
  position: relative;
  //transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 80%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
   // transition: opacity 500ms ease-in-out 0s;
    width: 80%;
    border-radius: 10px;
    z-index: 1;
    top: 0;
  }
  
`;

export default Detail;