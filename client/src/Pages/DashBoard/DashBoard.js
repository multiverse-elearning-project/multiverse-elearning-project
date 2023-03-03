import React, { useContext } from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./DashBoard.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";
import { Outlet } from "react-router-dom";

function DashBoard() {
  const { searchList } = useContext(MultiverseContext);

  return (
    <>
      <NavbarMenu />
      <div className={styles["dashboard-container"]}>
        <div className={styles.coursesDashboard}>
          <div className={styles.dashboardInnerContainer}>
            <div className={styles.searchbar}>
              <SearchBar />
            </div>
            <div className={styles.coursesCard}>
              {searchList?.length === 0 ? (
                <div>No result found</div>
              ) : (
                searchList?.map((filteredcourse, index) => {
                  return (
                    <CourseCard key={index} courseDetail={filteredcourse} />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className={styles.create_newcourse}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
