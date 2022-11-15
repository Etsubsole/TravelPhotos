import styled from "styled-components";
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";
import {useState,useEffect} from 'react';
import { updateUser } from "../Api";
import { authUser, createUser, deleteUser,deleteUserr, readUsers, readUserss, registerUser } from "../Function";
import Preloader from "./Preloader";
import { Link , useNavigate} from "react-router-dom";
const ManageUser = (props) =>{
const [users,setUsers] = useState(null);
const [userID,setUserID] = useState(0);

useEffect(() => {
    const fetchData = async () => {
      const result = await readUserss();
      console.log(result);
      setUsers(result);
      
      return result;
    }
    fetchData();
  }, [])
const navigate = useNavigate();

function list(){
    console.log("um in");

}






    return (
<Container>

<Content>
   { !users?<Preloader/>:<div>
<ul className="usersList">
    {users.map(user =>(
        <li key = {user._id}

        onClick={() => setUserID(user._id)}
        className="usersList-item"><h4>{user.name}</h4><p>{user.email}<br/>{user.phoneNumber}<br/></p><a href='/admin'
        onClick={() => deleteUserr(user._id)}
        className='delete-item'
        >
         <IconButton className="D"> <DeleteIcon/></IconButton>   
           </a>
        
        </li>
    ))}
</ul></div>}
</Content>
</Container>

    )
}
const Container = styled.div`
color:whitesmoke;
padding:20px;
.co{
    color:whitesmoke;
}
.D{
    color:white;
}`;
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
`;
export default ManageUser;