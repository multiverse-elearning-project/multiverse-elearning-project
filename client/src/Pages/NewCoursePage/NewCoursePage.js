import React, { useContext } from 'react';
import CourseForm from '../../Components/CourseForm/CourseForm';
import NavbarMenu from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CreateCourse from '../../Components/CreateCourse/CreateCourse';
import { MultiverseContext } from '../../ContextApi/contextapi';
import styles from './NewCoursePage.module.css'

function NewCoursePage() {
  const { filteredCourses, SetFilteredCourses } =
    useContext(MultiverseContext);

  return (
    <div>
      < NavbarMenu />
      < CourseForm />
      <div className={styles['coursesCard']}>
       {filteredCourses?.map((course) => {
        return  < CreateCourse key={course.id} data={course}/>
      })} 
      </div>
      < Footer />
    </div>
  )
}

export default NewCoursePage