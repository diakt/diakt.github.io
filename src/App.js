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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/interests" element={<Interests />} />
            <Route exact path="/projects" element={<Projects />} />
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