import React, { useState, useEffect } from "react";
import { getAllCourses } from "../Helper/Helper";
import axios from "axios";
import mockdata from "./mockdata";
const MultiverseContext = React.createContext();
function MultiverseProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [courses, SetCourses] = useState(mockdata);
  const [filteredCourses, SetFilteredCourses] = useState(courses);
  const [enrollCourse, setEnrollCourse] = useState([]);
  const [isEditClicked, setIsEditClicked] = useState(false)

  // useEffect(() => {
  //   const allcourses = getAllCourses()
  //   SetCourses(allcourses)
  // }, [courses]);

  console.log(enrollCourse);
  return (
    <MultiverseContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        courses,
        SetCourses,
        filteredCourses,
        SetFilteredCourses,
        enrollCourse,
        setEnrollCourse,
        isEditClicked,
        setIsEditClicked
      }}
    >
      {children}
    </MultiverseContext.Provider>
  );
}

export { MultiverseContext, MultiverseProvider };
