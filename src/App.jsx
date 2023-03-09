//import des routes
import { Routes, Route } from "react-router-dom";

//Import des pages et composants de l'app
import Header from "./components/Header";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import FicheLogement from "./pages/PageLogement";
import Footer from "./components/Footer";

//Import du CSS
import "./styles/App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
