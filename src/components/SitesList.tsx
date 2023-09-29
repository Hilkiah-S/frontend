import React from 'react';
import '../../style/sitecontainers.css';
import {
   StarOutlined,
   TeamOutlined
  } from '@ant-design/icons';
interface SitesList {

  text: string;
 
}


const Sitelist: React.FC<SitesList> = ({ text }) => {
  return (
    <div className="icon-text-icon-container">
      <span className="prefix-icon"><StarOutlined  style={{ fontSize: '20px' }}/></span>
      <span className="text" style={{ fontWeight: 'bold' }}>{text}</span>
      <span className="postfix-icon"><TeamOutlined size={70} style={{ fontSize: '36px' }}/></span>
    </div>
  );
}

export default Sitelist;
