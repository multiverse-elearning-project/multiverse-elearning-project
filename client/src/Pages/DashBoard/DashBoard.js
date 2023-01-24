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
      {/* <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div> */}
      <Footer />
    </>
  );
}

export default DashBoard;
