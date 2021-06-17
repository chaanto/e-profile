import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/index';

function App() {
  return (
    <>
      <div>
        <Router>
            <Home />
        </Router>
    </div> 
  </>
  );
}

export default App;
