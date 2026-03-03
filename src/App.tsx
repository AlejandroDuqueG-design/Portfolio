import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import ContactInfoPage from "./pages/ContactInfoPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects">
          <Route index element={<ProjectsPage />} />
          <Route path=":project" element={<ProjectDetailsPage />} />
        </Route>
        <Route path="/aboutme">
          <Route index element={<AboutMePage />} />
          <Route path="contactinfo" element={<ContactInfoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
