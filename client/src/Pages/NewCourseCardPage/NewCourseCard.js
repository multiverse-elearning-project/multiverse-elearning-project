import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import NewCourseCard from "../../Components/NewCourseCard/NewCourseCard";
function CourseCard() {
  return (
    <div>
      <NavbarMenu />
      <NewCourseCard />
      <Footer/>
    </div>
  );
}

export default CourseCard;