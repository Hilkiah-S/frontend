import { AxiosError } from 'axios';
import React, { useState } from 'react';
import axios from 'axios';
import '../../style/customerregister.css';
import { RegisterCustomersForm } from './types';
function Addcustomers() {

  const [customername, setName] = useState('');
  const [site, setSite] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [approved, setStatus] = useState(false);


  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();

      const token = localStorage.getItem('token')


      const senddata = { customername, site, phone, email, approved }

      console.log(senddata);
      const response = await axios.post("http://localhost:3000/customer/create", senddata, { headers: { 'Authorization': `Bearer ${token}` } });
      if(response){
        alert("Successfully created!");
      }
    } catch (e: any) {
      if (e instanceof AxiosError)
        alert(e.response?.data.msg)
    }

  };

  return (
    <>
      <div className="Inputforcustomers">
        <form onSubmit={handleSubmit} className='Customeraddform'>
          <label>
            Name:
            <input type="text" placeholder='Customer Name' className='Customerinput' value={customername} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Site:
            <input type="text" placeholder='Site' className='Customerinput' value={site} onChange={(e) => setSite(e.target.value)} />
          </label>
          <label>
            Phone Number:
            <input type="text" placeholder='Phone.no' className='Customerinput' value={phone} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" placeholder='Email' className='Customerinput' value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Status:
            <div className="switch-group">
              <label className="switch-label">Approved/Not Approved</label>
              <div className="switch">
                <input type="checkbox" checked={approved} onChange={() => setStatus(!approved)} />
                <span className="slider"></span>
              </div>
            </div>

          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Addcustomers;
