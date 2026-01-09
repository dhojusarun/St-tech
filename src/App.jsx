import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Instructors from "./pages/Instructors";
import Instructorprofile from "./pages/Instructorprofile";
import Henryinstructor from "./pages/Henryinstructor";
import Ethaninstructor from "./pages/Ethaninstructor";
import Jordaninstructor from "./pages/Jordaninstructor";
import Charlotteinstructor from "./pages/Charlotteinstructor";
import NancyCourse from "./pages/NancyCourse";
import NancyGraphic from "./pages/NancyGraphic";
import HenryMern from "./pages/HenryMern";
import HenryData from "./pages/HenryData";
import CharWeb from "./pages/CharWeb";
import CharBrand from "./pages/CharBrand";
import JordanProject from "./pages/JordanProject";
import JordanPublic from "./pages/JordanPublic";
import EthanBusiness from "./pages/EthanBusiness";
import Ethan3D from "./pages/Ethan3D";
import NancyDigital from "./pages/NancyDigital";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
import DashboardLayout from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Dashprofile from "./pages/Dashprofile";
import Dashcourses from "./pages/Dashcourses";
import Dashtask from "./pages/Dashtask";
import Dashwishlist from "./pages/Dashwishlist";
import Dashfeedback from "./pages/Dashfeedback";
import Dashmessages from "./pages/Dashmessages";
import Dashsetting from "./pages/Dashsetting";
import Enrolled from "./pages/Enrolled";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import Assignments from "./pages/Assignments";
import Quizzes from "./pages/Quizzes";
import Tests from "./pages/Tests";
import Dashresource from "./pages/Dashresource";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Failure from "./pages/Failure";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/henryinstructor" element={<Henryinstructor />} />
        <Route path="/charlotteinstructor" element={<Charlotteinstructor />} />
        <Route path="/ethaninstructor" element={<Ethaninstructor />} />
        <Route path="/jordaninstructor" element={<Jordaninstructor />} />
        <Route path="/instructorprofile" element={<Instructorprofile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/nancycourse" element={<NancyCourse />} />
        <Route path="/nancygraphic" element={<NancyGraphic />} />
        <Route path="/nancydigital" element={<NancyDigital />} />
        <Route path="/henrymern" element={<HenryMern />} />
        <Route path="/henrydata" element={<HenryData />} />
        <Route path="/charweb" element={<CharWeb />} />
        <Route path="/charbrand" element={<CharBrand />} />
        <Route path="/ethan3d" element={<Ethan3D />} />
        <Route path="/ethanbusiness" element={<EthanBusiness />} />
        <Route path="/jordanproject" element={<JordanProject />} />
        <Route path="/jordanpublic" element={<JordanPublic />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} /> 
         <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Dashprofile />} />
          <Route path="courses" element={<Dashcourses />}>
            <Route index element={<Enrolled />} />
            <Route path="enrolled" element={<Enrolled />} />
            <Route path="active" element={<Active />} />
            <Route path="completed" element={<Completed />} />
          </Route>
          <Route path="resource" element={<Dashresource/>} />
          <Route path="tasks" element={<Dashtask/>} >
          <Route index element={<Assignments />} />
            <Route path="assignment" element={<Assignments />} />
            <Route path="quizzes" element={<Quizzes/>} />
            <Route path="test" element={<Tests />} />
          </Route>
          <Route path="wishlist" element={<Dashwishlist/>} />
          <Route path="feedback" element={<Dashfeedback/>} />
          <Route path="messages" element={<Dashmessages/>} />
          <Route path="settings" element={<Dashsetting/>} />
        </Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
