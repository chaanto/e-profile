import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/home';
import About from './Pages/about';
import Project from './Pages/portfolio';
import Resume from './Pages/resume';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' exact component={About}/>
              <Route path='/project' exact component={Project}/>
              <Route path='/resume' exact component={Resume}/>
            </Switch>
        </Router>
    </div> 
  </>
  );
}

export default App;
