import React from "react";
import NewCourse from "../../Components/NewCourse/NewCourse";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
function NewCourses() {
  return (
    <div>
      <NavbarMenu />
      <NewCourse />
      <Footer/>
    </div>
  );
}

export default NewCourses;