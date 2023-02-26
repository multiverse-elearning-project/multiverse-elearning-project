import axios from "axios";
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

  useEffect(() => {
    async function FetchAllcourses() {
      const allcourses = await axios.get("http://localhost:8080/courses");
      SetCourses(allcourses.data);
    }
    FetchAllcourses();
  }, []);
console.log(courses)
  const FilterCardData = (allcourses) => {
    const courseCard = allcourses?.map((course, i) => {
      const Initialmodules = course?.modules;
      let InitalLect = "";
      if (Initialmodules?.length > 0) {
        InitalLect = Initialmodules[0]?.lectures[0]?.lectureUrl;
      }
      return {
        Id: course?.courseID,
        coursetittle: course?.courseName,
        vedioUrl: InitalLect,
        coursedescr: course?.description,
        price: course?.coursePrice,
        creator:`${course?.user?.firstName} ${course?.user?.lastName}`
      };
    });
    SetFilteredCourses(courseCard);
  };

  useEffect(() => {
    FilterCardData(courses);
  }, [courses]);
console.log(filteredCourses)
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
