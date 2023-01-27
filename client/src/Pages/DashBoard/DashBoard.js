import React from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./DashBoard.css";

function DashBoard() {
  return (
    <>
      <NavbarMenu />
      <SearchBar />
      <div>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
