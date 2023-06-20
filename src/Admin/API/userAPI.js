import axiosClient from "./axiosClient";



// Them nguoi dung
export const apiAddUser = async(userData) => {
    const {data} = await axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung",userData)
    return data;
}

// Xoa nguoi dung
export const apiDeleteUser = async(userId) => {
    const {data} = await axiosClient.delete("/QuanLyNguoiDung/XoaNguoiDung", {
        params: {
            TaiKhoan: userId,
        },
    })
    return data;
}


// Update nguoi dung
export const apiUpdateUser = async (userData) => {
    const { data } = await axiosClient.post("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", userData);
    return data;
  }

  // User login 
  export const apiUserLogin = async (values) => {
    const { data } = await axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
    return data;
  }

  