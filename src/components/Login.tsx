import '../../style/login.css'
import user_icon from '../assets/user.png'
import visible_password from '../assets/visible.png'
import invisible_password from '../assets/invisible.png'
import {Sendrequest} from './Sendrequest';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormValue } from './types';
import {
 
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  BulbOutlined,
  CodeSandboxOutlined,
  UserOutlined,
  FundOutlined,
  ShopOutlined,
  SearchOutlined,
  LockOutlined
} from '@ant-design/icons';
import { Outlet, Link } from 'react-router-dom'

function Login(){

  const {register, handleSubmit} = useForm<LoginFormValue>()
  const [password , setPassword] = useState("")
  const [email, setEmail] = useState("")



return (
    <>
    <div className="container">
<div className="leftside" >Login</div>
<div className="rightside">
    <div className='header'>
    <div className='centertext'>Login</div>
    </div> 

    <form className='Regform' onSubmit={handleSubmit(Sendrequest)}>
       
    {/* <div className="input-group-login"> */}
              
            <div className="input-group-login">
              <input type="email" placeholder="Email"  {...register("email")} onChange={(e)=>{setEmail(e.target.value)}}/>
              <MailOutlined className="input-icon" />
            </div>
            <br/>
            <div className="input-group-login">
              <input type="password" placeholder="Password" {...register("password")} onChange={(e)=>{setPassword(e.target.value)}}/>
              <LockOutlined  className="input-icon"  size={1}/>
            </div>
            <button >Login</button>
            <div className='accountquestion'>don't have an account? <div className='noaccount'><Link to={"/"}  className='alreadyaccount'>Signup</Link></div></div>
    </form>
    </div>
</div>
    </>
);

}
export default Login;