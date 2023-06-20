import axiosClient from "./axiosClient";


// danh sach khoa hoc
export const apiGetListCourse = async (nameId) => {
    const {data} = await axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc",{
        params:{
            tenKhoaHoc: nameId,
            MaNhom:"GP05",
        }
    });
    return data;
}

// lay danh muc khoa hoc
export const apiGetHeaderCourse = async (nameId) => {
    const {data} = await axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc",{
        params: {
            tenDanhMuc: nameId,
        },
    });
    return data;
}

// lay khoa hoc theo danh muc
export const apiCourseToHeader = async () => {
    const {data} = await axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc",{
        params: {
            MaNhom: "GP05",
        },
    });
    return data;
}

// LayDanhSachKhoaHoc_PhanTrang

export const apiCoursePage = async(formData) => {
    const {data} = await axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang",{
        params: {
            tenKhoaHoc: formData,
            MaNhom: "GP05",
        },
    });
    return data;
}


// lay thong tin khoa hoc
export const apiInfoCourse = async(nameId) => {
    const {data} = await axiosClient.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc",{
        params: {
            maKhoaHoc: nameId,
        },
    });
    return data;
}

// lay thong tin hoc vien khoa hoc
export const apiCourseUser = async() => {
    const {data} = await axiosClient.get("/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc");
    return data;
}

//them khoa hoc
export const apiAddCourse = async(formData) => {
    const {data} = await axiosClient.post("/QuanLyKhoaHoc/ThemKhoaHoc", formData);
    return data;
}

//Xoa khoa hoc/ xem lai sau

export const apiDeleteCourse = async(formData) => {
    const {data} = await axiosClient.delete("/QuanLyKhoaHoc/XoaKhoaHoc",
        {
            params: {
                maKhoaHoc: formData,
            },
        });
    return data;
}

//Cap nhat khoa hoc
export const apiUpdateCourse = async(formData) => {
    const {data} = await axiosClient.post("/QuanLyKhoaHoc/CapNhatKhoaHoc", formData);
    return data;
}
