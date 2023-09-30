import axios from 'axios';
import { RegisterFormValue } from './types';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
export const RegisterSendrequest = async (
    data: RegisterFormValue
  ) => {
   
    
    const senddata = {
      "firstname": `${data.firstname}`,
      "lastname": `${data.lastname}`,
      "email": `${data.email}`,
      "password": `${data.userpassword}`,
    }
  
    try{
    const response = await axios.post("https://kel.addisphoenix.com/auth/signup", senddata);
    
    
    console.log(response);
     if (response.data.success===true){
      alert("Successfully Registered!");
      window.location.href='login';
     }
    }catch(e: any){
      if(e instanceof AxiosError)
      alert(e.response?.data.msg)
    }
    
  
      
      return data;
  
  }