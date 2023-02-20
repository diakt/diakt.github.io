import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
// import Footer from "./components/Footer";

//New elts
import NewHeader from "./components/NewHeader";
import NewFooter from "./components/NewFooter";
import NewHome from "./components/NewHome";
import NewAbout from "./components/NewAbout";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <NewHeader />
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<NewHome />} />
            <Route exact path="/about" element={<NewAbout />} />
            <Route exact path="/interests" element={<Interests />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <footer className="footer">
          <NewFooter />
        </footer>
      </body>
    </div>
  );
}

export default App;
