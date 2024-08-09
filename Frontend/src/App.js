
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import Adduser from './User/Adduser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditUser from './User/Edit';
import ViewUser from './User/View';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>

     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="adduser" element={<Adduser/>}/>
      <Route exact path="/edituser/:id" element={<EditUser/>}/>
      <Route exact path="/viewuser/:id" element={<ViewUser />} />
  
     </Routes>

    
     </Router>
    
    </div>
  );
}

export default App;
