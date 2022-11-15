import styled from "styled-components";
import {IconButton} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import {useState,useEffect} from 'react';
import { updatePost } from "../Api";
import { authPost, createPost, deletePost, readPosts } from "../Function";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";

const UserData = (props) =>{
    const [posts, setPosts] = useState(null);
    const [postID,setPostID] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          const result = await readPosts();
          console.log(result);
          setPosts(result);
          
          //return result;
        }
        fetchData();
      }, [])

    return (
<Container>
Manage Users Data
<Main>
    { !posts?<Preloader/>:<Content>

    {posts.map((post) => (
            <Wrap key={post._id}
            onClick={() => setPostID(post._id)}
            >
              {post.name}
              <Link to={`/detail/` + post.name}>
                <img src={post.imgUrl} alt={post.name} />
              </Link>
              <a href="#" onClick={() => deletePost(post._id)}>
              <IconButton>
                <DeleteIcon style={{color:'grey',zIndex:'1',position:"relative"}}/>
              </IconButton></a><br/>
              <a href="#" onClick={() => updatePost(post._id)}>
              <IconButton>
                <EditIcon style={{color:'black',zIndex:'1',boxShadow: "rgba(247, 232, 232, 0.35) 0px 5px 15px"
}}/>
              </IconButton></a>
            </Wrap>
          ))}
</Content>}
</Main>
</Container>

    )
}
const Container = styled.div`
color:whitesmoke;
padding:20px;
.co{
    color:whitesmoke;
}
`;
const Main =styled.div`

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
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default UserData;