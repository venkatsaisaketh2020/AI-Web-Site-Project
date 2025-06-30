
import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Ai from './components/Ai';
import About from './components/About';
import Gallery from './components/Gallery';

const App= ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="Ai" element={<Ai/>} />
        <Route path="About" element={<About/>} />
        <Route path="Gallery" element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;