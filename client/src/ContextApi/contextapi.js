import axios from "axios";
import React, { useState, useEffect } from "react";
import { getAllCourses } from "../Helper/Helper";
import mockdata from "./mockdata";
const MultiverseContext = React.createContext();
function MultiverseProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [courses, SetCourses] = useState([]);
  const [filteredCourses, SetFilteredCourses] = useState([]);
  const [searchList, setSearchList] = useState(filteredCourses);
  const [enrollCourses, setEnrollCourse] = useState([]);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [ismoduleClick, setModuleClick] = useState([]);
  const [isLectureClicked, setIsLectureClicked] = useState("");
  const [selectedLecture, SetSelectedLecture] = useState([]);
  const [isCloseClicked, setIsCloseClicked] = useState(true);
  const [addModule, setAddModule ] = useState(false)
  // const [newCourse, setNewCourse] = useState()

  useEffect(() => {
    async function FetchAllcourses() {
      const allcourses = await axios.get("http://localhost:8080/courses");
      SetCourses(allcourses?.data);
    }
    FetchAllcourses();
  }, []);
  console.log(courses);
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
        creator: `${course?.user?.firstName} ${course?.user?.lastName}`,
      };
    });
    SetFilteredCourses(courseCard);
    setSearchList(courseCard)
  };

  useEffect(() => {
    FilterCardData(courses);
  }, [courses]);

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
        isEditClicked,
        setIsEditClicked,
        selectedCourse,
        setSelectedCourse,
        ismoduleClick,
        setModuleClick,
        selectedLecture,
        SetSelectedLecture,
        isLectureClicked,
        setIsLectureClicked,
        searchList,
        setSearchList,
        isCloseClicked, 
        setIsCloseClicked,
        addModule, 
        setAddModule
      }}
    >
      {children}
    </MultiverseContext.Provider>
  );
}

export { MultiverseContext, MultiverseProvider };
