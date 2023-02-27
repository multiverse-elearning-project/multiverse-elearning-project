import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import NewCourseDetail from "../../Components/NewCourseDetail/NewCourseDetail";
function CourseDetailNew() {
  return (
    <div>
      <NavbarMenu />
      <NewCourseDetail />
      <Footer/>
    </div>
  );
}

export default CourseDetailNew;