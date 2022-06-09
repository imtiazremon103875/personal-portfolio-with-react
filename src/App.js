import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Intro from './Component/Intro';
import Banner from './Component/Banner';
import Support from './Component/Support';
import Contact from './Component/Contact';


import Projects from './Component/Projects';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="bg-dark">
      <Header></Header>
      <Banner></Banner>
      <Intro></Intro>
      <Projects></Projects>
      <Support></Support>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
