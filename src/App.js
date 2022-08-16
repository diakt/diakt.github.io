import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Interests from './components/Interests'
import Projects from './components/Projects'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </body>
    </div>
  );
}

export default App;