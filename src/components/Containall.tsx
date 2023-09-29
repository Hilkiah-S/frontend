import React, { useState } from "react";
import Addcustomers from "./Addcustomers";
import "../../style/menu.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AppstoreOutlined,
  CalendarOutlined,
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
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import type { MenuProps, MenuTheme } from "antd/es/menu";
import StasticalComp from "./Customerstastics";
import DisplayList from "./ListJson";
import Barchart from "./Barchart";
import Sitelist from "./SitesList";
// const [background, setName] = useState('');
 // by default the dashboard will be set to the selected menu state

function Containall() {
  const [selectedMenu, setSelectedMenu] = useState("DashBoard");
  return (
    <>
      <div className="container">
        <div className="menu">
          <div className="innermenu">
            <ul className="allList">
            <li
                className="Topheader"
               
              >
                <p>
                {selectedMenu} 
                  
                </p>
              </li>
              <li
                className="individualList"
                onClick={() => {
                  setSelectedMenu("DashBoard");
                }}
              >
                <p>
                  <BulbOutlined size={8} />
                  Dashboard
                </p>
              </li>
              <li
                className="individualList"
                onClick={() => {
                  setSelectedMenu("Notifications");
                }}
              >
                <p>
                  <CodeSandboxOutlined size={8} />
                  Notifications
                </p>
              </li>
              <li
                className="individualList"
                onClick={() => {
                  setSelectedMenu("Customers");
                }}
              >
                <p>
                  <UserOutlined size={8} /> Customers
                </p>
              </li>
              <li
                className="individualList"
                onClick={() => {
                  setSelectedMenu("Sales performance");
                }}
              >
                <p>
                  <FundOutlined size={8} /> Sales performance
                </p>
              </li>
              <li
                className="individualList"
                onClick={() => {
                  setSelectedMenu("Our Properties");
                }}
              >
                <p>
                  <ShopOutlined size={8} /> Our Properties
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="restofpage">
          <div>
            <br />
            <hr />
            {}
            <div className="centralright">
              {}
              {selectedMenu === "DashBoard" ? (
                <Addcustomers />
              ) : selectedMenu === "Notifications" ? (
                <StasticalComp />
              ) : selectedMenu === "Sales performance" ? (
                <DisplayList />
              ) : selectedMenu === "Customers" ? (
                <StasticalComp />
              ) :selectedMenu === "Our Properties" ? (
                <>
                <ul className="containerforsite">
                  <li className="indivisuallist">
                <Sitelist text="Bole Site" />
                </li>
                <li className="indivisuallist">
                <Sitelist text="Piasa Site" />
                </li>
                <li className="indivisuallist">
                <Sitelist text="CMC Site" />
                </li>
                </ul>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Containall;