import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Project1 from "./pages/Project1Page";
import Project2 from "./pages/Project2Page";
import AboutMePage from "./pages/AboutMePage";
import ContactInfoPage from "./pages/ContactInfoPage";

function App() {
  return (
    <>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects">
            <Route index element={<ProjectsPage />} />
            <Route path=":project1" element={<Project1 />} />
            <Route path=":project2" element={<Project2 />} />
          </Route>
          <Route path="/aboutme">
            <Route index element={<AboutMePage />} />
            <Route path=":contactinfo" element={<ContactInfoPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
