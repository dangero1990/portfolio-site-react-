import './App.scss';
import StartMenu from './pages/StartMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [mute, setMute] = useState(true);

  return (
    <>
      <UserContext.Provider value={{ mute, setMute }}>
        <main>
          <Routes>
            <Route path='' element={<StartMenu />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;
