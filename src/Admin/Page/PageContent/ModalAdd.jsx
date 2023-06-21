import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { apiAddUser } from "../../API/userAPI";
import { useSelector,useDispatch } from "react-redux";

import *  as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form"; 
import addUser from "../../Slices/addUser";

function ModalAdd() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [passShow, setPassShow] = useState(false);
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

  const schema = yup.object({
    taiKhoan: yup.string().required("không được để trống"),
    matKhau: yup.string().required("không được để trống").matches('^.{4,}$','Mật khẩu có ít nhất 4 ký tự.'),
    hoTen: yup.string().required("không được để trống"),
    soDT: yup.string().required("không được để trống"),
    maLoaiNguoiDung: yup.string().required("không được để trống"),
    maNhom: yup.string().required("không được để trống"),
    email: yup.string().required("không được để trống"),
  })

  const { register,handleSubmit, formState: {errors } } = useForm({
    defaultValues: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        email: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  })

  const {  error, isLoading } = useSelector((state) => state.edit);
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    dispatch(addUser(values));
  }

  const onError = (errors) => {
    console.log(errors);
  }
  return (
    <>
      <button
        style={{ margin: "10px 0 0 16px" }}
        className="btn btn-primary"
        onClick={handleShow}
      >
        Add User
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm người dùng</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className=" mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Tài khoản"
                {...register("taiKhoan")}
              />
              {errors.taiKhoan && (
                <p style={{ color: "red" }}>không được để trống </p>
              )}
            </div>

            <div>
              <div className=" mb-3 d-flex">
                <input
                
                  className="form-control"
                  type={passShow ? "text" : "password"}
                  placeholder="mật khẩu"
                  {...register("matKhau")}
                />
                <span
                  className="input-group-text"
                  onClick={() => setPassShow(!passShow)}
                >
                  {passShow ? (
                    <i>
                      {" "}
                      <EyeOutlined />{" "}
                    </i>
                  ) : (
                    <i>
                      {" "}
                      <EyeInvisibleOutlined />{" "}
                    </i>
                  )}
                </span>
              </div>
              {errors.matKhau && (
                <p style={{ color: "red" }}>không được để trống </p>
              )}
            </div>

            <div className=" mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Họ Tên"
                {...register("hoTen")}
              />
              {errors.hoTen && (
                <p style={{ color: "red" }}>không được để trống </p>
              )}
            </div>

            <div className=" mb-3">
              <input
                className="form-control"
                type="number"
                placeholder="Số điện thoại"
                {...register("soDT")}
              />
              {errors.soDT && (
                <p style={{ color: "red" }}>không được để trống </p>
              )}
            </div>

            <div className=" mb-3">
              <select
                className="form-control"
                type="text"
                placeholder="Mã loại người dùng"
                {...register("maLoaiNguoiDung")}
              >
                <option value="">Chọn loại người dùng</option>
                <option value="GV">GV</option>
                <option value="HV">HV</option>
              </select>
              {errors.maLoaiNguoiDung && (
                <p style={{ color: "red" }}>không được để trống </p>
              )}
            </div>

            <div className=" mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Mã nhóm"
                {...register("maNhom")}
              />
              {errors.maNhom && (
                <p style={{ color: "red" }}>không được để trống </p>
              )}
            </div>

            <div className=" mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p style={{ color: "red" }}>không được để trống </p>
              )}
            </div>


            {error && <p>{error}</p>}
            
            <Modal.Footer>
                <button disabled = {isLoading} className="btn btn-primary">Thêm</button>
                <button className="btn btn-secondary" onClick={handleClose}>Đóng</button>
            </Modal.Footer>
          </Form>
          
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAdd;
