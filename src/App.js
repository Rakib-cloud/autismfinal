
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Course from './Pages/Course/Course';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';



function App() {
  return (
    <div>
      {/* <Head></Head> */}
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="allcourse" element={ <RequireAuth>
          <Course></Course>
          </RequireAuth>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="contact" element={<Contact></Contact>} />
       
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<Signup></Signup>} />
      </Routes>
      
    </div>
  );
}

export default App;
