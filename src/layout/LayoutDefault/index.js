import { Layout } from "antd";
//import { Footer } from "antd/es/layout/layout";
import "./LayoutDefault.css"
import logo from "../../image/logo.png";
import logofold from "../../image/logo-fold.png";
import { SearchOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import Notify from "../../component/Notify";
import MenuSider from "../../component/MenuSider";
import { Outlet } from "react-router-dom";
const {Sider, Content} = Layout;


function LayoutDefault() {

  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <Layout className="layout-default">
        <header className="header">
          <div className={"header_logo " + (collapse && " header_logo--collapse")} >
            <img src={collapse ? logofold : logo} alt="logo" />
          </div>

          <div className="header_nav">
            <div className="header_nav-left">
              <div className="header_collapse" onClick={() => setCollapse(!collapse)}>
                <MenuUnfoldOutlined />
              </div>
              <div className="header_search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header_nav-right">
              <Notify/>
            </div>
          </div>
        </header>

        <Layout>
          <Sider className="sider" collapsed={collapse} theme="light" width={300} >
            <MenuSider/>
          </Sider>
          <Content className="content">
            <Outlet/>
          </Content>
        </Layout>

        {/* <Footer className="footer">
         <div className="footer-content">
          <p>Copyright © 2018 Theme_Nate. All rights reserved.</p>
         </div>
        
        </Footer> */}
      </Layout>
    </>
  )
}
export default LayoutDefault;
