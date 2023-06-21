import React from 'react'
import ModalAdd from '../PageContent/ModalAdd'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'






function PageUser() {
    

  return (
    <div style={{width:"100rem", margin:"auto"}}>
      <div className='card'>
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
            <thead>
              <tr>
                <td>Tài khoản</td>
                <td>Mật khẩu</td>
                <td>Họ tên</td>
                <td>SĐT</td>
                <td>Mã loại người dùng</td>
                <td>Mã nhóm</td>
                <td>Email</td>
              </tr>
            </thead>

            <tbody>
            
            </tbody>
            {/* <Pagination
                            className="pagination"
                            onChange={PaginationChange}
                            total={Math.ceil(listUser.totalRow / 10)}
                            // ko thể thiếu current
                            current={current}
                            pageSize={1}
                            /> */}

          </table>
        </div>
      </div>
    </div>
  )
}

export default PageUser