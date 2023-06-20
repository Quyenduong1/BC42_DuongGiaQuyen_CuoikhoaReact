import React from 'react'
import { Menu } from 'antd'
import {AppstoreOutlined, FormOutlined, UserAddOutlined}  from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

function LayoutSideBar() {
  const navigate = useNavigate()
  return (
   <div className='SideMenu'>
    <Menu onClick={(item) =>{
      navigate(item.key);
    }} 
    items={[
      {
        label: "Quản Lý Khóa Học",
        icon: <AppstoreOutlined/>,
        key: "/admin",
      },

      {
        label: "Quản Lý Khóa Học",
        icon: <AppstoreOutlined/>,
        key: "/admin/quanlykhoahoc",
      },

      {
        label: "Quản Lý Người Dùng",
        icon: <UserAddOutlined/>,
        key: "/admin/quanlynguoidung",
      },
      {
        label: "Ghi danh",
        icon: <FormOutlined />,
        key: "/ghidanh",
      }

    ]}>
    </Menu>
   </div>
  );
}

export default LayoutSideBar