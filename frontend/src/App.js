import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import ProjectDetails from './components/ProjectDetails';
import Delete from './pages/Delete'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dropdown from './components/Dropdown'
import View from './pages/View'


function App() {


  
  return (
    <Router>
    <div className="Error"><p>Mobile Under Development, Please Enlarge Screen Size to Access</p></div>
    <div className="App">
      <Navbar />
      <Dropdown />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/user/:username" element={<View/>}/>
          <Route exact path="/projects" element={<Home />}/>
          <Route exact path="/create" element={<Create />}/>
          <Route exact path="/projects/:_id" element={<ProjectDetails/>}/>
          <Route exact path="/delete" element={<Delete />}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/NotFound" element={<NotFound />}/>
          <Route exact path="/Login" element={<Login/>}/>

      </Routes>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
