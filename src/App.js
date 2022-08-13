import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Interests from './components/Interests'
import Projects from './components/Projects'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/interests/" element={<Interests />} />
          <Route path="/projects/" element={<About />} />
        </Routes>
      </main>

      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;