import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import Navbar from '../Components/Navbar/navbar';
import Sidebar from '../Components/Sidebar/sidebar';
import HeroSection from '../Components/HeroSection/';

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <IconContext.Provider value={{color : 'black'}}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />


        {/* <div className="container">
          <div className="text-center">
            <Image src="https://avatars.githubusercontent.com/u/43694261?s=400&u=71ed9f6f84254f13c2a56dbfe971fd2fa72518e7&v=4"
              alt="logo" 
              className="profile-img"
              roundedCircle
            />
            <div className="row">
              <h2 className="space-of-beauty">
                  I'm Charlie Aprilianto
              </h2>
              <p>
                a
                <Typical
                  loop={Infinity}
                  wrapper='b' 
                  steps={[
                  ' Front-end Developer.',
                  4000,
                  ]}
                />
              </p>
              <div className="col">
                <a href="https://github.com/chaanto" target="_blank" rel="noreferrer">
                  <DiIcons.DiGithubAlt size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/charlie-aprilianto/" target="_blank" rel="noreferrer">
                  <FaIcons.FaLinkedin size={20} />
                </a>
                <a href="https://tinyurl.com/8y6p6ptw" target="_blank" rel="noreferrer">
                  <ImIcons.ImWhatsapp size={20} />
                </a>
              </div>
                
            </div>
          </div>
        </div> */}
      </IconContext.Provider>
    </>
  );
}

export default Home;
