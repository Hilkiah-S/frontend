import axios from 'axios';
import { AxiosError } from 'axios';
import { RegisterCustomersForm  } from './types';
export const RegisterCustomersendrequest = async (
    data: RegisterCustomersForm 
  ) => {
    console.log(data);
  
    const senddata = {
      "customername": `${data.customername}`,
      "phone": `${data.phone}`,
      "site": `${data.site}`,
      "email": `${data.email}`,
      "approved": `${data.approved}`,
    }
  
  try{
    const response = await axios.post("https://kel.addisphoenix.com/customer/create", senddata);
  
    
    // console.log(response);
  
    
    
  
      if(response){
      alert("Success");
      }}catch(e: any){
        if(e instanceof AxiosError)
        alert(e.response?.data.msg)
      }
  
  }