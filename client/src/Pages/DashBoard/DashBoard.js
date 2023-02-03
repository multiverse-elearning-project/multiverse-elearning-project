import React from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from './DashBoard.module.css'

function DashBoard() {
  return (
    <>
      <NavbarMenu />
      <div className={styles.coursesDashboard}>
        <div className={styles.searchbar}>
          <SearchBar />
        </div>
        <div className={styles.coursesCard}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
