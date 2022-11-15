import React , { useEffect, useState, useContext,useMemo, useRef } from 'react';
import Preloader from './Preloader';
import TinderCard from "react-tinder-card"
import styled from 'styled-components';
import { readPosts } from '../Function';
import { useNavigate} from 'react-router-dom';
import { Context } from "../Context";
import Detail from './Detail';
function TinderCards() {
    const [posts, setPosts] = useState([]);
const [IDP, setIDP] =     useContext(Context);
const [post,setPost] =  useContext(Context);
const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
          const result = await readPosts();
          console.log(result);
          setPosts(result);
          
          //return result;
        }
        fetchData();
      }, [])
      
    const outfFrame = (name) => {
        console.log(name + "left the screen!");

    };
    const swiped =( nameTodelete) => {
        console.log("removing:.." + nameTodelete);
        //setLastDirection(direction);
    }
  return (
   // <div className='tinderCards'> 
   <Container>
    

    {
      !posts?<Preloader/>:<Content>
        {posts.map((post) => (
        <TinderCard
        className="swipe"
        key={post._id}
        preventSwipe={["up","down"]}
        onClick={()=>{setIDP(post._id);navigate("/detail")}}
        onSwipe={(dir) => {swiped(dir);setPost(post.name)}}
        onCardLeftScreen={( )=> outfFrame(post.name)}>

   
    <Posts onClick={()=>{setIDP(post._id);navigate("/detail")}} style={{backgroundImage: `url(${post.imgUrl}` }} className="card">
        
        <h1>{post.name} </h1>
        
    </Posts>
    
    </TinderCard>
        ))}</Content>}
</Container>
  );
  
}
const Container = styled.div`
width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.8); 
`;
const Content = styled.div`
display:flex;
align-items: center;
    justify-content: center;
    margin-top:5vh;
    width:100%;
    .swipe{
        position: absolute;
    }
`;
const Posts = styled.div`
    position:relative;
    //background-color: #fff;
    width: 600px;
    padding: 10px;
    max-width: 85vw;
    height: 70vh;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;    text-shadow: 2px 2px 5px grey;
    border-radius: 20px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position:center;
    //object-fit: contain;
    margin-bottom:60px;
    h1 {
        position: absolute;
        bottom: 0;
        margin: 10px;
        color:#fff;
    }
    
        &:hover{
    transform:scale(1.02);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border:#bebebe solid;

  }
 
    
`;
export const {people} = TinderCards;
export default TinderCards;