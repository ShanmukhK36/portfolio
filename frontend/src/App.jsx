import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import WorkExperience from "./pages/WorkExperience";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Certificate from "./pages/Certificate";
import University from "./pages/University";
import Company from "./pages/Company";
import Project from "./pages/Project";
import OtherLinks from "./pages/OtherLinks";

function App() {

  return (
    <div className='px-4 sm:px-[5vm] md:px-[7vm] lg:px-[9vm] flex-col'>
      <Header />
      <div className="flex flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-gray-100 h-screen">
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/work-experience" element={<WorkExperience />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/certifications" element={<Certifications />}/>
            <Route path="/other-links" element={<OtherLinks />}/>
            <Route path='/certifications/certificate/:certificateId' element={<Certificate />}/>
            <Route path="/education/university/:universityId" element={<University />}/>
            <Route path="/work-experience/company/:companyId" element={<Company />}/>
            <Route path="/projects/project/:projectId" element={<Project />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
