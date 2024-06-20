import { Menu } from "antd";
import { DashboardOutlined, AppstoreOutlined, LayoutOutlined, PieChartOutlined, FileOutlined, LockOutlined, HomeOutlined, FileProtectOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


function MenuSider() {

  const items = [
    {
      label: "Dashboard",
      icon: <DashboardOutlined />,
      key: "Dashboard-1",
      children: [
        {
          label: <Link to="/">Default</Link>,
          key: "/"
        },
        {
          label: "CRM",
          key: "CRM2"
        },
        {
          label: "E-commerce",
          key: "E-commerce3"
        },
        {
          label: "Projects",
          key: "Projects4"
        },
      ]
    },
    {
      label: "Apps",
      icon: <AppstoreOutlined />,
      key: "Apps-2",
      children: [
        {
          label: "Chat",
          key: "Chat1"
        },
        {
          label: "File Manager",
          key: "FileManager2"
        },
        {
          label: "Mail",
          key: "Mail3"
        },
      ]
    },
    {
      label: "Components",
      icon: <LayoutOutlined />,
      key: "Components-3",
      children: [
        {
          label: "General",
          key: "General1",
          children: [
            {
              label: "Ant Grid",
              key: "AntGrid1"
            },
            {
              label: "Button",
              key: "Button2"
            },
            {
              label: "Icon",
              key: "Icon3"
            },
            {
              label: "Typography",
              key: "Typography4"
            },
          ]
        },
        {
          label: "Navigation",
          key: "Navigation1",
          children: [
            {
              label: "Affix",
              key: "Affix1"
            },
            {
              label: "Breadcrumb",
              key: "Breadcrumb2"
            },
            {
              label: "Dropdown",
              key: "Dropdown3"
            },
            {
              label: "Menu",
              key: "Menu4"
            },
            {
              label: "Page Header",
              key: "Pageheader5"
            },
            {
              label: "Pagination",
              key: "Pagination6"
            },
            {
              label: "Steps",
              key: "Steps7"
            },
            
          ]
        },
        {
          label: "Data Entry",
          key: "Dataentry1",
          children: [
            {
              label: "Autocomplete",
              key: "Autocomplete1"
            },
            {
              label: "Cascader",
              key: "Cascader2"
            },
            {
              label: "Checkbox",
              key: "Checkbox3"
            },
          ]
        },
        {
          label: "Data Display",
          key: "Datadiplay1",
          children: [
            {
              label: "Avatar",
              key: "Avatar1"
            },
            {
              label: "Badge",
              key: "Badge2"
            },
            {
              label: "Card",
              key: "Card3"
            },
          ]
        },
        {
          label: "Feedback",
          key: "Feedback1",
          children: [
            {
              label: "Alert",
              key: "Alert1"
            },
            {
              label: "Modal",
              key: "Modal2"
            },
            {
              label: "Spin",
              key: "Spin3"
            },
          ]
        },
        {
          label: "Others",
          key: "Others1",
          children: [
            {
              label: "Anchor",
              key: "Anchor1"
            },
            {
              label: "BackTop",
              key: "Backtop2"
            },
            {
              label: "Divider",
              key: "Divider3"
            },
          ]
        },
        
      ]

    },
    {
      label: "Chart",
      icon: <PieChartOutlined />,
      key: "Chart-4"
    },
    {
      label: "Pages",
      icon: <FileOutlined />,
      key: "Pages-5",
      children: [
        {
          label: "Profile",
          key: "Profile1"
        },
        {
          label: "Invoice",
          key: "Invoice2"
        },
        {
          label: "Members",
          key: "Members3"
        },
        {
          label: "Pricing",
          key: "Pricing4"
        },
        {
          label: "Setting",
          key: "Setting5"
        },
        {
          label: "Blog",
          key: "Blog6",
          children: [
            {
              label:"Blog Grid",
              key: "Bloggrid1"
            },
            {
              label:"Blog List",
              key: "Bloglist2"
            },
            {
              label:"Blog Post",
              key: "Blogpost3"
            },
          ]
        },
      ]
    },
    {
      label: "Authentication",
      icon: <LockOutlined />,
      key: "Authentication-6",
      children:[
        {
          label:"Login 1",
          key: "Login1"
        },
        {
          label:"Login 2",
          key: "Login2"
        },
        {
          label:"Sign Up 1",
          key: "Signup3"
        },
        {
          label:"Sign Up 2",
          key: "Signup4"
        },
        {
          label:"Sign Up 3",
          key: "Signup5"
        },
        {
          label:"Error 1",
          key: "Error6"
        },
        {
          label:"Error 2",
          key: "Error7"
        }
      ]
    },
    {
      label: <Link to="/bookroom"> Bookroom</Link>,
      icon: <HomeOutlined />,
      key: "/bookroom",
    },
    {
      label: <Link to="/createroom"> Create Room</Link>,
      icon: <FileProtectOutlined />,
      key: "/createroom",
    },
    {
      label: <Link to="/listroom"> List Room</Link>,
      icon: <OrderedListOutlined />,
      key: "/listroom",
    },
  ]

  return (
    <>
      <Menu

        mode="inline"
        items={items}
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["Dashboard-1"]}
      />
    </>
  )
}
export default MenuSider;