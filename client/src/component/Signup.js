import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import {useState, useEffect} from "react"
import { updateUser } from "../Api";
import { createUser, deleteUser, readUserss,registerUser} from "../Function";
import Preloader from './Preloader';
const Signup = (props) => {
  //const [currentP, setCurrentP] = useState({password:""});
  //const [currentUN, setCurrentUN] = useState({userName:""});
const[users, setUsers]= useState(null);
//const [user,setUser] = useState({userName:"",password:""});
const [currentID, setcurrentID] = useState(0)
const [user,setUser] = useState([{
  name:"",
  email:"",
  password:"",
  phoneNumber:""
}]);

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
   
// const handleSubmit =(e) => {
// e.preventDefault();
//   //navigate("/home");
// const {userName,email,phoneNumber,password} = user;
// setUser(userName,email,phoneNumber,password);
// console.log(user)
//const userexist = users!==null?users.findOne((use)=>use.email===user.email):<Preloader/>;
const onSubmitHandler = async (e) => {
  e.preventDefault();
 
  
  const result =await registerUser(user);
  console.log(result)
  if(!result){
  navigate("/")
  }
  else{setUsers([...users, user]);
    
  navigate("/auth")
  console.log(user)
  console.log(users)}
  
    //alert(response.data);
  }
//clear()
//}



//handleSubmit.bind();
    return(
      <div>
        
        <Container>
        
            <form method="post" onSubmit={onSubmitHandler}>
              <hr style={{margin:"20px", transform:"scale(1.7)"}}/>
            UserName<Input type="text"
             placeholder="enter userName"
             //name="userName"
             onChange={e=>setUser({...user,name:e.target.value})}
             /><br/>
            email<Input type="email" 
            placeholder="@gmail.com"
            //name="email"
            onChange={e=>setUser({...user,email:e.target.value})}

            /><br/>
            PhoneNumber<Input type="text" 
            placeholder="phoneNumber"
            //name="phoneNumber"
            onChange={e=>setUser({...user,phoneNumber:e.target.value})}

            /><br/>
            password<Input type="password"
            //name="password"
            onChange={e=>setUser({...user,password:e.target.value})}

            />
            <Input  className="sb"type="submit" name="submit"/>
            <Link to='/auth'>allredy have an account</Link>
            
 </form>
 
        </Container></div>


    )
}

const Container = styled.div`
  //margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  color:green;
  justify-content: center;
  justify-items:space-between;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  
  a{
    color:white;
    font-size: 11px;
  &:hover{
    font-size: bold;
    transform:scale3d(1.1);
  }
}
.sb{
  color:whitesmoke;
  background-color:green;
}
`;
const Input = styled.input`
border-radius:5px;
display:block;
align-items:center;
padding:10px;
  
.sb{
  color:whitesmoke;
  background-color:green;
}
`;
export default Signup;