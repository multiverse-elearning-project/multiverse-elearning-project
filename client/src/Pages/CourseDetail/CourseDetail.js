import React, { useContext } from "react";
import styles from "./CourseDetail.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";
import NavbarMenu from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Lecture from "../../Components/Lectures/Lecture";

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
              allowFullScreen
            ></iframe>
          </div>
        </main>
        <aside className={styles.lectureListContainer}>
        <h5 className={styles.heading}>Content</h5>
          <Lecture data={{ id: 1, lecturetitle: "lecture1", time: "4min" }} />
          <Lecture data={{ id: 2, lecturetitle: "lecture2", time: "10min" }} />
          <Lecture data={{ id: 3, lecturetitle: "lecture3", time: "23min" }} />
          <Lecture data={{ id: 4, lecturetitle: "lecture4", time: "9min" }} />
          <Lecture data={{ id: 5, lecturetitle: "lecture5", time: "4min" }} />
          <Lecture data={{ id: 6, lecturetitle: "lecture6", time: "10min" }} />
          <Lecture data={{ id: 7, lecturetitle: "lecture7", time: "23min" }} />
          <Lecture data={{ id: 8, lecturetitle: "lecture8", time: "9min" }} />
          <Lecture data={{ id: 9, lecturetitle: "lecture9", time: "4min" }} />
          <Lecture data={{ id: 10, lecturetitle: "lecture10", time: "10min" }} />
          <Lecture data={{ id: 11, lecturetitle: "lecture11", time: "23min" }} />
          <Lecture data={{ id: 12, lecturetitle: "lecture12", time: "9min" }} />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetail;
