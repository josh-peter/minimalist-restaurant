import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Components/Screens/HomeScreen";
import Footer from "./Components/Footer/Footer";
import PostPage from "./Components/Pages/PostPage";
import CommentPage from "./Components/Pages/CommentPage";
import PhotosPage from "./Components/Pages/PhotosPage";
import ToDosPage from "./Components/Pages/ToDosPage";
import ContactPage from "./Components/Pages/ContactPage";
import AboutPage from "./Components/Pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/comments" element={<CommentPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/todos" element={<ToDosPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
