import React, { useContext } from 'react';
import CourseForm from '../../Components/CourseForm/CourseForm';
import NavbarMenu from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CreateCourse from '../../Components/CreateCourse/CreateCourse';
import { MultiverseContext } from '../../ContextApi/contextapi';
import styles from './NewCoursePage.module.css'
import AddNewModule from '../../Components/AddNewModule/AddNewModule';
import Module from '../../Components/Module/Module';
import Lecture from '../../Components/Lectures/Lecture';
import CreateLectureForm from '../../Components/CreateLectureForm/CreateLectureForm';

function NewCoursePage() {
  const { filteredCourses, SetFilteredCourses, selectedCourse, selectedModule } =
    useContext(MultiverseContext);

  // const initialPreview = selectedCourse?.modules;
  console.log(selectedModule)
  return (
    <div>
      < NavbarMenu />
      < AddNewModule />
      < CourseForm />
      <CreateLectureForm />
      <div className={styles.detailcourseContainer}>
      <div className={styles['coursesCard']}>
       {filteredCourses?.map((course) => {
        return  < CreateCourse key={course.id} data={course}/>
      })} 
      </div>
      <aside className={styles.lectureListContainer}>
          <h5 className={styles.heading}>Content</h5>
          {selectedModule?.length > 0 &&
            selectedModule?.map((mod) => {
              return (
                <div key={mod?.moduleID} className="lectures-mod">
                  <Module moduletitle={mod} />
                  {mod?.lectures?.map((lesson) => {
                    return (
                      <Lecture
                        key={lesson.lectureID}
                        data={lesson}
                        modul={mod}
                      />
                    );
                  })}
                </div>
              );
            })}
        </aside>
        </div>
      < Footer />
    </div>
    
  )
}

export default NewCoursePage