import React, {useState}from "react";
import './loginform.css';
import {FaUser,FaLock} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
const LoginForm=()=>{
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (mail=== "abc@yahoo.com" && password === "123") {
  navigate('/home');
    }
    else{
      alert("Data Record not found");
    }
    
  };
  
  function handleMailChange(e){
    setMail(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }
 return (
  <body id="login">
  <div className="box">
    <div className='wrapper'>
      <form onSubmit={handleSubmitEvent}>
        <h1>Login</h1>
        <div className="input-box">
            <input type="email" placeholder='Mail ID'value={mail} onChange={(e)=>handleMailChange(e)} required />
            <FaUser className="icon"/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='Password' value={password} onChange={(e)=>handlePasswordChange(e)} required />
            <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
            <label ><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
        </div>
      </form>

    </div>
    </div>
    </body>
 );
};
export default LoginForm;