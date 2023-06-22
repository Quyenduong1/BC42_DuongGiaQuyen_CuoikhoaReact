import React, { useState, useEffect } from 'react'
import ModalAdd from '../Manage User/ModalAdd'
import { Input } from 'antd'
import { apiListUser, apiSearchUser } from '../../API/userAPI';
import { SearchOutlined } from '@ant-design/icons'





function PageUser() {
    const [listUser, setListUser] = useState([]);
    const [errorAPI, setErrorAPI] = useState([]);
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");

   
    const getListUser = async(list) => {
      try {
        const data  = await apiListUser(list);
        setListUser(data);
      } catch (error) {
        setErrorAPI(error);
      }
    }

    const searchUser = async(value) => {
      try {
        const dataSearch = await apiSearchUser(value);
        setListUser(dataSearch);
        console.log(dataSearch);
      } catch (error) {
        console.log(error)
      }
    }
    

    const handleDelete = (values) => {
      const deleteItem = listUser.filter(item => item.taiKhoan !== values)
      setListUser(deleteItem);
    }

    const handleSearch = () => {
      searchUser(setSearchValue);
      getListUser();
    }

    useEffect(() => {
      getListUser();
  },[])
    
  return (
    <div style={{width:"100rem", margin:"auto"}}>
      <div className='card container-fluid'>
        <div className='card-header mb-3'>
          <h2>User List</h2>
        </div>

        <div className="w-25 d-flex mb-3">
          <Input
            placeholder='Nhập tên TK để tìm kiếm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className='btn btn-primary' onClick={handleSearch}>
              <SearchOutlined style={{alignItems:"center"}}/>
          </button>
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
              {listUser?.map((user,index)=> {
                return (
                  <tr key={index}>
                   
                    <td>{user.taiKhoan}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.email}</td>
                    <td>{user.soDt}</td>
                    <td>{user.maLoaiNguoiDung}</td>
                    <td>
                      <button className='btn btn-success'>Edit</button>
                      <button className='btn btn-danger' onClick={() => handleDelete(user.taiKhoan)}>Delete</button>
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