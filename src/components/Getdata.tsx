import axios from 'axios';

export const Getdata  = async ()=>{

   
  
  try{
    const response = await axios.get("http://localhost:3000/customer/get" );
  
    
    console.log(response);
  
      if(response){
       return ( <>{response.data.data}</>);
      }}catch(e){alert(e); return(<></>)}

  
  }
  export default Getdata;