import React, { useState, useEffect } from "react";
import { getAllCourses } from "../Helper/Helper";
import axios from "axios";
import mockdata from "./mockdata";
const MultiverseContext = React.createContext();
function MultiverseProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [courses, SetCourses] = useState(mockdata);
  const [filteredCourses, SetFilteredCourses] = useState(courses);
  const [enrollCourses, setEnrollCourse] = useState([]);

  // useEffect(() => {
  //   const allcourses = getAllCourses()
  //   SetCourses(allcourses)
  // }, [courses]);

  console.log(enrollCourses);
  return (
    <MultiverseContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        courses,
        SetCourses,
        filteredCourses,
        SetFilteredCourses,
        enrollCourses,
        setEnrollCourse,
      }}
    >
      {children}
    </MultiverseContext.Provider>
  );
}

export { MultiverseContext, MultiverseProvider };
