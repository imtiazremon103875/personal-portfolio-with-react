import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Intro from './Component/Intro';
import Banner from './Component/Banner';
import Support from './Component/Support';
import Contact from './Component/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Projects from './Component/Projects';
import Footer from './Component/Footer';
import Myskill from './Component/Myskill';

function App() {
  return (
    <div className="bg-dark">
      <Header></Header>
      <Banner></Banner>
      <Intro></Intro>
      <Projects></Projects>
      <Support></Support>
      <Myskill></Myskill>

      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
