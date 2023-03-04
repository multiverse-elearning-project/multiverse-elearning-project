import axios from "axios";

export const getAllCourses = () => {
  let courses;
  try {
    courses = axios.get("url");
  } catch (error) {
    console.log("error occured when i try to fetch all courses");
  }
  return courses;
};


