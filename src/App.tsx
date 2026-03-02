import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import ContactInfoPage from "./pages/ContactInfoPage";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />}>
          <Route path="projects/:project1" element={<Project1 />} />
          <Route path="projects/:project2" element={<Project2 />} />
          <Route path="projects/:project3" element={<Project3 />} />
        </Route>
        <Route path="/contactinfo" element={<ContactInfoPage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
      </Routes>
    </div>
  );
}

export default App;
