import './home.css';
import Typical from 'react-typical';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import * as DiIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import { IconContext } from 'react-icons';

function Home() {
  return (
    <>
      <IconContext.Provider value={{color : 'black'}}>
        <div className="container">
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
              <p>
                Find Me in
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
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Home;
