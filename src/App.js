
import './App.css';
import Header from './Component/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Blogs from './Component/Blogs';
import Projects from './Component/Projects';
import ProjectsDetails from './Component/ProjectsDetails';


function App() {
  return (
    <div className="bg-dark">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/details/:id' element={<ProjectsDetails></ProjectsDetails>}></Route>
      </Routes>


      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
