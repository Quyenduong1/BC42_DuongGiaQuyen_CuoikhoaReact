import React, { useState, useEffect } from 'react'
import ModalAdd from '../Manage User/ModalAdd'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { apiListUser } from '../../API/userAPI';
// import Pagination from 'rc-pagination';





function PageUser() {
    const [listUser, setListUser] = useState([]);
    console.log(listUser);
    const [errorAPI, setErrorAPI] = useState([]);
    
   
    const getListUser = async(list) => {
      try {
        const data  = await apiListUser(list);
        console.log(data);
        setListUser(data);
      } catch (error) {
        setErrorAPI(error);
      }
    }

    useEffect(() => {
        getListUser()
    },[])
  return (
    <div style={{width:"100rem", margin:"auto"}}>
      <div className='card container-fluid'>
        <div className='card-header mb-3'>
          <h2>User List</h2>
        </div>

        <div className="d-flex mb-3">
          <Input placeholder='Nhập tên để tìm kiếm' />
          <button className='btn btn-primary'><SearchOutlined style={{alignItems:"center"}}/></button>
        </div>

        <div>
        <ModalAdd/>
        </div>

        <div className='card-body'>
          <table className='table table-bordered'>
            <thead className='text-center'>
              <tr>
                <td>Tài khoản</td>
                <td>Họ tên</td>
                <td>Email</td>
                <td>SĐT</td>
                <td>Mã loại người dùng</td>
                <td>Option</td>    
              </tr>
            </thead>

            <tbody>
              {listUser?.data?.map((user,index)=> {
                return (
                  <tr key={index}>
                   
                    <td>{user.taiKhoan}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.email}</td>
                    <td>{user.sdt}</td>
                    <td>{user.maLoaiNguoiDung}</td>
                    <td>
                      <button className='btn btn-success'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  )
}

export default PageUser