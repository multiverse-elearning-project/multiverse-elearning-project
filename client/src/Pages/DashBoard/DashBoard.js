import React, { useContext, useRef } from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./DashBoard.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";

function DashBoard() {
  const { filteredCourses } = useContext(MultiverseContext);
  
  return (
    <>
      <NavbarMenu />
      <div className={styles.coursesDashboard}>
        <div className={styles.dashboardInnerContainer}>
          <div className={styles.searchbar}>
            <SearchBar />
          </div>
          <div className={styles.coursesCard}>
            {filteredCourses.length === 0 ? (
              <div>No result found</div>
            ) : (
              filteredCourses.map((filteredcourse, index) => {
                return <CourseCard key={index} courseDetail={filteredcourse} />;
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
