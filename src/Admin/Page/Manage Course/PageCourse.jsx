import React from 'react'
import { useEffect, useState } from 'react'
// import { apiInfoCourse } from '../../API/CourseAPI'
import { Space, Table } from 'antd'

function PageCourse() {
  // const [dataCourse, setDataCourse] = useState([])

  // const getCourse = async() => {
  //   try {
  //     const data = await apiInfoCourse();
  //     setDataCourse(data.content)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(()=> {
  //   getCourse();
  //   },[]);


  return (
    <Space size={20}>
      <h3 className='text-center' style={{width:"1920px"}}>Quản lý khoá học</h3>
      <Table columns={[{
        title:"tenKhoaHoc"
      }]}>

      </Table>

    </Space>

    
  )
}

export default PageCourse