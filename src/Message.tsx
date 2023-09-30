import '../style/register.css'
import user_icon from './assets/user.png'
import email_icon from './assets/mail.png'
import visible_password from './assets/visible.png'
import invisible_password from './assets/invisible.png'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RegisterFormValue } from './components/types'
import { RegisterSendrequest } from './components/Resgistersendrequest'
import {
LockOutlined,
MailOutlined,
UserOutlined
} from "@ant-design/icons";

function Message(){
  const {register, handleSubmit} = useForm<RegisterFormValue>()
  const [firstname , setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [userpassword , setUserpassword] = useState("")
  
return (
<>
<div className="container">
<div className="leftside" >Register</div>
<div className="rightside">
    <div className='header'>
    <div className='centertext'>Register</div>
    </div>

    <form className='Regform' onSubmit={handleSubmit(RegisterSendrequest)}>
       
    <div className="input-group">
              <input type="text" placeholder="First Name" {...register("firstname")} onChange={(e)=>{setFirstname(e.target.value)}}/>
              <UserOutlined alt="user icon" className="input-icon" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name" {...register("lastname")} onChange={(e)=>{setLastname(e.target.value)}} />
              <UserOutlined alt="user icon" className="input-icon" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" {...register("email")} onChange={(e)=>{setEmail(e.target.value)}} />
              <MailOutlined alt="email icon" className="input-icon" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" {...register("userpassword")} onChange={(e)=>{setUserpassword(e.target.value)}}/>
              <LockOutlined  className="input-icon" />
            </div>
            <button type="submit">Register</button>
            <div className='accountquestion'>Already have an account? <div className='alreadyaccount'><Link to={"login"} className='alreadyaccount'>Login</Link></div></div>
    </form>
    </div>
</div>

</>
);
}

export default Message;