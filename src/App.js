import Main from "./Admin/Layout/MainLayout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageUser from "./Admin/Page/Manage User/PageUser";
import AdminLayout from "./Admin/Layout/AdminSignIn/AdminLayout";
import PageCourse from "./Admin/Page/Manage Course/PageCourse";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />} />


        <Route path="/admin" element={<Main />}>
          <Route path="/admin/quanlykhoahoc" element ={<PageCourse/>} />
          <Route path="/admin/quanlynguoidung" element={<PageUser />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
