
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Tech from "./components/Tech";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';



function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
