import axios from "axios";
import React, { useState, useEffect } from "react";
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
  const [addModule, setAddModule] = useState(false);
  const [selectedModule, setSelectedModule] = useState();
  const [addLecture, setAddLecture] = useState(false);
  const [auth, setAuth] = useState({});
  const [addToCourseID, setAddToCourseId] = useState("");
  const [addToModuleID, setAddToModuleId] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [createdCourse, setCreatedCourse] = useState();
  const [deletedCourse, setDeletedCourse] = useState();
  //setDeletedCourse
  useEffect(() => {
    async function FetchAllcourses() {
      const allcourses = await axios.get("http://localhost:8080/courses");
      SetCourses(allcourses?.data);
    }
    FetchAllcourses();
  }, [createdCourse, deletedCourse]); //dependency array should be added here
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
    setSearchList(courseCard);
  };

  useEffect(() => {
    const sortedcourseByDate = courses?.sort((a, b) => {
      if (a.courseReleaseDate < b.courseReleaseDate) return -1;
      if (a.courseReleaseDate > b.courseReleaseDate) return 1;
    });

    const sortedcourselectureID = sortedcourseByDate?.map((cours) => {
      if (cours.modules) {
        return cours?.modules?.map((mod) =>
          mod?.lectures?.sort((a, b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
          })
        );
      }

      // return cours?.modules
    });

    console.log(sortedcourseByDate);
    console.log("lecture", sortedcourselectureID);
    //FilterCardData(courses);
    FilterCardData(sortedcourseByDate);
  }, [courses]);
  console.log(auth);
  console.log(addToModuleID);
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
        setAddModule,
        selectedModule,
        setSelectedModule,
        addLecture,
        setAddLecture,
        auth,
        setAuth,
        addToCourseID,
        setAddToCourseId,
        addToModuleID,
        setAddToModuleId,
        userInfo,
        setUserInfo,
        createdCourse,
        setCreatedCourse,
        deletedCourse,
        setDeletedCourse,
      }}
    >
      {children}
    </MultiverseContext.Provider>
  );
}

export { MultiverseContext, MultiverseProvider };
