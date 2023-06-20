import Main from "./Admin/Layout/MainLayout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageCourse from "./Admin/Page/Manage Course/PageCourse";
import PageUser from "./Admin/Page/Manage User/PageUser";
import AdminSignin from "./Admin/Page/Auth/Sigin/AdminSignin";
import AdminLayout from "./Admin/Layout/AdminSignIn/AdminLayout";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin-signin" element={<Main/>} />
        </Route>

      {/* <Route path="/admin/quanly" element = {<Main/>}>
        <Route path="/quanly/quanlykhoahoc" element = {<PageCourse/>} />
        <Route path="/quanly/quanlynguoidung" element = {<PageUser/>} />
      </Route> */}
      <Route path="*" element= {<h1>Not Found</h1>} />
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
