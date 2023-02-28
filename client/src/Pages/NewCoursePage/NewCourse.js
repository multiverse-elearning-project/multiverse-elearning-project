import React from "react";
import NewCourseForm from "../../Components/NewCourse/NewCourseForm";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
function NewCourses() {
  return (
    <div>
      <NavbarMenu />
      <NewCourseForm />
      <Footer/>
    </div>
  );
}

export default NewCourses;