import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Landing from "./Pages/LandingPage/Landing";
import DashBoard from "./Pages/DashBoard/DashBoard";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignUp />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/course" element={<CourseDetail />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
