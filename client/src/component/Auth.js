import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext , useState} from "react";

import { authUser, } from "../Function";
import { Context } from "../Context";
function Auth(props) {

 const [name, setName] =  useContext(Context);;
  //const [password, setPassword] = useState("");
const [user,setUser] = useState({name:"",password:""});
  const [ID,setID] = useContext(Context);;
// useEffect(() => {
//   const auth = async () => {
//     const result = await authUser(user);
//     console.log(result)
//     setUser(result)
//     //return result;
//   }
//   fetchData();
// }, [])
const navigate = useNavigate();
   

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(user)
    const result = await authUser(user);
   if(user.name==="admin" && user.password === "admin"){
    navigate("/admin")}
    else{

console.log(result);
navigate("/home");
if(!result){
  navigate("/")
  }
  else{
  navigate("/home");
  console.log(user);

setID(result._id);
console.log(name);
console.log(ID);
  alert(`welcomeback ${user.name}`);
}}
    };
  return (
    <Container>

      <form onSubmit={submitHandler}>
        <hr style={{ margin: "20px", transform: "scale(1.7)" }} />
        <fieldset>

          name<input type="text" name="username"
            placeholder="username"
           value={user.name || ""}
            onChange={e => {setUser({...user,name:e.target.value});
          setName(e.target.value)}}
              />
          password <input type="password" 
          placeholder="password" 
          name="password"
         value={user.password || ""}
          onChange={e => setUser({...user,password:e.target.value})} 
          />
          <input
            type="submit"
            
//onClick={login}
            className="sb"
            value="Login" />
          <Link to="/signup">don't have an account</Link>
        </fieldset>
      </form>
     
  
  
 

 {/*{users.map(user => (
// //    <li key={user._id}
// //   onClick={() => setcurrentID(user._id)}><div>{user.userName}</div></li>
// //  ))}*/}


    </Container>

  );
}

const Container = styled.div`
  //margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
 color:green;
 font-weight: bolder;
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
  position: relative;
  padding: 10px;
  margin-top:10px;
}

input{
border-radius:5px;
display:block;
align-items:center;
padding: 20px;
color:green;
  }

`;
export default Auth;