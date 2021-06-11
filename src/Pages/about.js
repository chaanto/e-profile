import '../App.css';
import Typical from 'react-typical';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";

function App() {
  return (
    <>
        <div className="App">
        <header className="App-header">
            <Image 
            src="https://avatars.githubusercontent.com/u/43694261?s=400&u=71ed9f6f84254f13c2a56dbfe971fd2fa72518e7&v=4" 
            className="App-logo" 
            alt="logo" 
            roundedCircle
            />
            <h1>
                About Me
            </h1>
            <p>
            <Typical
                loop={Infinity}
                wrapper='b' 
                steps={[
                'Web Developer',
                2000,
                'Mobile Developer',
                2000,
                'Gamer',
                2000,
                'Reader.',
                2000,
                ]}
            />
            </p>
        </header>
        </div>
    </>
  );
}

export default App;
