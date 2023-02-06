import React, { useState, useEffect } from "react";
import { getAllCourses } from "../Helper/Helper";
const MultiverseContext = React.createContext();
function MultiverseProvider({ children }) {
  const mockdata = [
    {
      coursetittle: "React js",
      coursedescr:
        "learn about react js in 2023. Some quick example text about the course and make up the bulk of the card's content.",
      vedioUrl: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
    },
    {
      coursetittle: "Typescript",
      coursedescr:
        "learn about typescript js in 2023. Some quick example text about the course and make up the bulk of the card's content.",
      vedioUrl: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
    },
    {
      coursetittle: "Next js",
      coursedescr:
        "learn about react react framework next js in 2023. Some quick example text about the course and make up the bulk of the card's content.",
      vedioUrl: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
    },
    {
      coursetittle: "Javascript",
      coursedescr:
        "learn about javascript js in 2023.  Some quick example text about the course and make up the bulk of the card's content.",
      vedioUrl: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [courses, SetCourses] = useState(mockdata);
  const [filteredCourses, SetFilteredCourses] = useState(courses);
  const [enrollCourse, setEnrollCourse] = useState([]);

  // useEffect(() => {
  //   const allcourses = getAllCourses()
  //   SetCourses(allcourses)
  // }, [courses]);
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
      }}
    >
      {children}
    </MultiverseContext.Provider>
  );
}

export { MultiverseContext, MultiverseProvider };
