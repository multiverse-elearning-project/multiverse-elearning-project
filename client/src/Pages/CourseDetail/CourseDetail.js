import React, { useContext } from "react";
import styles from "./CourseDetail.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";
import NavbarMenu from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CourseCard from "../../Components/CourseCard/CourseCard";

function CourseDetail() {
  // const { enrollCourse } = useContext(MultiverseContext);
  // const coursePreview = enrollCourse[0];
  //coursePreview.vedioUrl
  return (
    <>
      <NavbarMenu />
      <div className={styles.detailcourseContainer}>
        <main className={styles.previewsection}>
          <div>
            <iframe
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              frameborder="0"
              title="tittle"
              width="100%"
              height="500"
            ></iframe>
          </div>
        </main>
        <aside className={styles.lectureListContainer}>
          <CourseCard />
          <CourseCard />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetail;
