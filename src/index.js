import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import LoginForm from './components/login/loginform';
import Home from './components/dashboard/home';
// import { useNavigate } from "react-router-dom";
import {BrowserRouter,Router,Routes,Route,Link,} from "react-router-dom"
import Learningp from './components/documents/learningp';
import Companypolicy from './components/documents/companypolicy';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/login/loginform';
// const Navigate=useNavigate();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <Routes>
     <Route path='/' element={<App />}>
     </Route>
     <Route path='/login' element={<LoginForm/>} />
     <Route path='/home' element={<Home/>} />
     <Route path='/learningpolicies' element ={<Learningp />}/>
     <Route path='/companypolicies' element ={<Companypolicy />}/>
    {/* <Route path='*' element={<Navigate to={"login"} />} /> */}
  </Routes>
 </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
