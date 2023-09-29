import axios from 'axios';
import { AxiosError } from 'axios';
import { LoginFormValue } from './types';
// import { loginValues } from "./types";
import { Outlet, Link, Navigate } from 'react-router-dom'


export const Sendrequest = async (
  data: LoginFormValue
) => {

  console.log('data', data);
  
 
  const senddata = {
    "email": `${data.email}`,
    "password": `${data.password}`,
  }
 

 try{
  const response = await axios.post("http://198.199.80.48:3000/auth/login", senddata);

   
  console.log('response', response);
  debugger;
  localStorage.setItem('token', response.data.data.token)
  
   

  if (localStorage.getItem('token')) {
    alert("Success");
    window.location.href='/dash';
  }
  } catch(e: any){
    if(e instanceof AxiosError)
    alert(e.response?.data.msg)
  }

}