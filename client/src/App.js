import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Landing from "./Pages/LandingPage/Landing";
import DashBoard from "./Pages/DashBoard/DashBoard";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import Profile from "./Pages/ProfilePage/Profile";
import NewCourse from "./Components/NewCourse/NewCourse";
import NewContent from "./Components/NewCourseContent/NewContent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignUp />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="/dashboard/newcourse" element={<NewCourse />} />
            <Route path="/dashboard/newcourse_content" element={<NewContent />} />
          </Route>
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
