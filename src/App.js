import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>

      
      // <div className="App">
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/About" element={<About />} />
      //     <Route path="/Work" element={<Work />} />
      //     <Route path="/Testimonials" element={<Testimonials />} />
      //     <Route path="/Contact" element={<Contact />} />
      //     <Route path="/Footer" element={<Footer />} />
      //   </Routes>
      // </div>

  );
}

export default App;

