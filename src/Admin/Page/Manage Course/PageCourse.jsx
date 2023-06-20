import React from 'react'
import { useEffect, useState } from 'react'
import { apiInfoCourse } from '../../API/CourseAPI'
import { Space, Table } from 'antd'

function PageCourse() {
  const [dataCourse, setDataCourse] = useState([])

  const getCourse = async() => {
    try {
      const data = await apiInfoCourse();
      setDataCourse(data.content)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getCourse();
    },[]);


  return (
    <Space size={20}>
      <h1 className='text-center' style={{width:"1920px"}}>Quan ly khoa hoc</h1>
      <Table columns={[{
        title:"tenKhoaHoc"
      }]} dataSource={dataCourse}>

      </Table>

    </Space>

    
  )
}

export default PageCourse