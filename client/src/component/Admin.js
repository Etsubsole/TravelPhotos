import styled from "styled-components";
import SideBar from "./SideBar";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import ManageUser from "./ManageUser";
import UserData from "./UserData";
import ListIcon from '@mui/icons-material/List';
import CollectionsSharpIcon from '@mui/icons-material/CollectionsSharp';
import {useState,useEffect,useContext} from "react";
import { useNavigate ,Link} from "react-router-dom";
import { createPost, readPosts } from "../Function";
import Posted from "./Posted";
import { Context } from "../Context";
import FileBase64 from 'react-file-base64';


const Admin = (props) => {
  const [post, setPost] = useState([{
    title:"",
    discription:"",
    imgUrl:"",
    name:""
      }])
    const [posts, setPosts] =useState(null)
    
    const [name,setName] = useContext(Context);
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
    
    console.log(name);

    const onSubmitHandler = async (e) => {
      e.preventDefault();
     
      
      const result =await createPost(post);
      console.log(result)
      if(!result){
      navigate("/admin");
      //alert("please try again");
      }
      else{setPosts([...posts, post]);
        //setPost([...post,name]);
      navigate("/home")
      console.log(post)
      console.log(posts)
    console.log(post.name)
    }}
   const onImageChange = e => {
      if (e.target.files ) {
        let img = e.target.files;
        setPost({
          imgUrl: URL.createObjectURL(img)
        });
      }
    };
      
        //alert(response.data);
     

  return (
    <Container>
      <SideBar />
      <Content>
      {click?<form onSubmit={onSubmitHandler}>
          <fieldset>add new photos
          {/* <FileBase64
        multiple={ false }
        onDone={ ({base64})=> setPost({...post,imgUrl:base64})} /> */}
        <input type="file" 
             accept=".png, .jpg, .jpeg"
            name="text"
            onChange={e=>setPost({...post,imgUrl:e.target.value})}
           // onChange={onImageChange}
           />
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
        </form>:<div>
        <Link to={"/home"}>back</Link>
        <p style={{color:"white",padding:"10px"}}>Manage Users</p>
        <Link to={"/manageuser"}>
<IconButton 

className="co">
    <ListIcon/>
    </IconButton></Link>
    <p style={{color:"white",padding:"10px"}}> Manage Users Data</p>
    <Link to={"/userdata"}>
    <IconButton className="co">
    <CollectionsSharpIcon/>
    </IconButton>
       </Link>
         <h4 style={{padding:"20px"}}>Add new post</h4>
         <IconButton onClick={clicked}>
          <AddIcon style={{ color: "white" }} />
        </IconButton>
        <Posted/>
        </div>}
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
    color:whitesmoke;
}
h4{
  color:white;
  position: relative;
  
} 
.co{
  color:white;
}
form{
  color:white;
}
`;
export default Admin;