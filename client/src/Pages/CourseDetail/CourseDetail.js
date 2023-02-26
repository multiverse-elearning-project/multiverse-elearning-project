import React, { useContext, useState } from "react";
import styles from "./CourseDetail.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";
import NavbarMenu from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Lecture from "../../Components/Lectures/Lecture";

function CourseDetail() {
  // const { enrollCourse } = useContext(MultiverseContext);
  // const coursePreview = enrollCourse[0];
  //coursePreview.vedioUrl

  const [selectedLect, SetSelectedLect] = useState({});

  const { enrollCourses } = useContext(MultiverseContext);
  const initialPreview = enrollCourses[0];

  const handleSelection = (selectedID) => {
    const selected = enrollCourses.filter(
      (lecture) => lecture.id === selectedID
    );
    SetSelectedLect(selected);
  };
  return (
    <>
      <NavbarMenu />
      <div className={styles.detailcourseContainer}>
        <main className={styles.previewsection}>
          <div>
            <iframe
              src={
                selectedLect?.videoUrl ||
                initialPreview?.videoUrl ||
                "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              }
              frameBorder="0"
              title={initialPreview?.courseName || "tittle"}
              width="100%"
              height="500"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h3>
              {selectedLect?.lecturetitle || initialPreview?.lecturetitle || ""}
            </h3>
            <p>
              {selectedLect?.lectureDesc || initialPreview?.lectureDesc || ""}
            </p>
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
          <Lecture
            data={{ id: 10, lecturetitle: "lecture10", time: "10min" }}
          />
          <Lecture
            data={{ id: 11, lecturetitle: "lecture11", time: "23min" }}
          />
          <Lecture data={{ id: 12, lecturetitle: "lecture12", time: "9min" }} />
          {/* {enrollCourses?.map((course) => (
            <Lecture
              key={course?.id}
              data={{
                id: course?.id,
                lecturetitle: course?.name,
                time: course?.duration,
              }}
              onClick={() => {
                handleSelection(course?.id);
              }}
            />
          ))} */}
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetail;
