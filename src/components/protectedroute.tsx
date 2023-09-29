import React from "react";
import {AuthValue } from './Auth';
export const Protected =  (
    _props:AuthValue
  ) =>{
  
  if (!_props.isAuth) {
    window.location.href="login";
  }
  else{
  window.location.href="/dash";}

}
export default Protected;