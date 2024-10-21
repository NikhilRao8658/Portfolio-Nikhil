// import { ThemeProvider } from "styled-components";
// import { useState, useEffect } from "react";
// import { darkTheme, lightTheme } from './utils/Themes.js'
// import Navbar from "./components/Navbar";
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Education from "./components/Education";
// import ProjectDetails from "./components/ProjectDetails";
// import styled from "styled-components";
// import Error from "./Pages/Error.jsx";

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   overflow-x: hidden;
// `

// const Wrapper = styled.div`
//   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
// `
// function App() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [openModal, setOpenModal] = useState({ state: false, project: null });
//   console.log(openModal)
//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <Router >
//         <Navbar />
//         <Body>
//           <HeroSection />
//           <Wrapper>
//             <Skills />
//           </Wrapper>
//           <Projects openModal={openModal} setOpenModal={setOpenModal} />
//           <Wrapper>
//             <Education />
//             <Contact />
//           </Wrapper>
//           <Footer />
//           {openModal.state &&
//             <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
//           }
//         </Body>
//         {/* <Error/> */}
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;







import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import Error from "./Pages/Error.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  background: ${({ theme }) => theme.bg === "#1C1C27" ? "#191924" : "#5c5b5b"}; // Light background in dark mode, custom color in light mode
  color: ${({ theme }) => theme.bg === "#1C1C27" ? "#D3D3D3" : "#FFFFFF"}; // Dark text in dark mode, light text in light mode
  border: 1px solid ${({ theme }) => theme.bg === "#1C1C27" ? "#854CE6" : "#444"}; // Border color for better visibility
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: background 0.3s, color 0.3s; // Smooth transition for aesthetics
  z-index: 1000; 
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode)
    console.log(darkMode);
    
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <ToggleButton onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </ToggleButton>
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;


