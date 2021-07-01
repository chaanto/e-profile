import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Sidebar from '../Components/Sidebar/sidebar';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne } from '../Components/sectionData';
// import ProjectSection from '../Components/projectSection';
import ProjectCard from '../Components/projectInfoSection/projectCard'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      {/* <ProjectSection/> */}
      <ProjectCard/>

    </>
  );
}

export default Home;
