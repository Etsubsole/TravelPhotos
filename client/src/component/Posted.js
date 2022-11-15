import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useState,useEffect,useContext} from 'react';
import Preloader from "./Preloader";
import {readPosts,deletePost } from "../Function";
import { Context } from "../Context";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Posted = (props) => {


  const [click, setClick] = useState(false);
    const clicked = () => {
      setClick(true);
    }
    const [name,setName] =    useContext(Context);
    const [postID,setPostID] = useState(0);

  // const [post, setPost] = useState([{
  //   title:"",
  //   discription:"",
  //   imgUrl:"",
  //   name:""
  //     }])
    const [posts, setPosts] =useState(null);

    useEffect(() => {
  const fetchData = async () => {
    const result = await readPosts();
    console.log(result);
    setPosts(result);
    
    return result;
  }
  fetchData();
}, [])
console.log(name);
console.log(posts);
    const find =() =>{
      
      if(!posts)
      {
      <Preloader/>}
      else{
      const filter=Object.values(posts).filter(post=> post.name=== name);
    console.log(filter);
       setPosts(filter);
     console.log(posts)
      };
    };
    
const onSubmitHandler = async (e) => {
  e.preventDefault();
 
  
}
  return (
    <Container>
      <h4 style={{ color: "whitesmoke" }}>your postes </h4>
      <IconButton onClick={()=>{find();clicked();}}>
      <ArrowRightIcon style={{color:'grey',zIndex:'1'}}/>
      </IconButton>
      {click?
        !posts?<Preloader/>:<Content>
        {
          posts.map((post) => (
            <Wrap key={post._id}
            onClick={() => setPostID(post._id)}
            >
              {post.name}
              <Link to={'/detail'}>
                <img src={post.imgUrl} alt={post.name} />
              </Link>
              <a href="javascript:location.reload();"
              onClick={() => deletePost(post._id)}>
              <IconButton>
                <DeleteIcon style={{color:'grey',zIndex:'1',position:"relative"}}/>
              </IconButton></a>
              <IconButton>
                <EditIcon style={{color:'darkgrey',zIndex:'1'}}/>
              </IconButton>
            </Wrap>
          ))}
          </Content>:""}
     
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
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

export default Posted;