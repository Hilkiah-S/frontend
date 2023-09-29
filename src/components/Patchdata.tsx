import axios from 'axios';

export const Patchdata  = async ()=>{

  try{
    const response = await axios.patch("https://kel.addisphoenix.com/customer/changeStatus" );
  
    
  
      console.log(response);
      if(response.data.success=="true"){
       alert("Succesfully Updated");
      }}catch(e){alert(e)}

  
  }
  export default Patchdata;