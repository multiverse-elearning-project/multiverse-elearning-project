import React, { useContext, useState } from "react";
import styles from "./CourseDetail.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";
import NavbarMenu from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Lecture from "../../Components/Lectures/Lecture";
import Module from "../../Components/Module/Module";
import PreviewPanel from "../../Components/PreviewPanel/PreviewPanel";

function CourseDetail() {
  const { selectedCourse } = useContext(MultiverseContext);
  const initialPreview = selectedCourse?.modules;

  return (
    <>
      <NavbarMenu />
      <div className={styles.detailcourseContainer}>
        <PreviewPanel />
        <aside className={styles.lectureListContainer}>
          <h5 className={styles.heading}>Content</h5>
          {initialPreview?.length > 0 &&
            initialPreview?.map((mod) => {
              return (
                <div key={mod?.moduleID} className="lectures-mod">
                  <Module moduletitle={mod} />
                  {mod?.lectures?.map((lesson) => {
                    return <Lecture key={lesson.lectureID} data={lesson} modul={mod} />;
                  })}
                </div>
              );
            })}
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetail;
