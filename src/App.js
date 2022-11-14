
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
import Purchasedetails from './Pages/Course/Purchasedetails';
import Comments from './comments/Comments';
import Conference from './Pages/Conference/Conference';
import Footer from './Pages/Shared/Footer/Footer';



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
          <Route path="Purchase/:_id" element={<RequireAuth>
          <Purchasedetails></Purchasedetails>
          </RequireAuth>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="forum" element={<Comments commentsUrl="http://localhost:3004/comments"
        currentUserId="1"></Comments>} />
        <Route path="conference" element={<Conference></Conference>} />

        <Route path="contact" element={<Contact></Contact>} />
       
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<Signup></Signup>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
