import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Landing from "./Pages/LandingPage/Landing";
import DashBoard from "./Pages/DashBoard/DashBoard";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import ContactUs from "./Pages/ContactUsPage/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
