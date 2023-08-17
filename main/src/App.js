import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Calculator from './Views/Calculator';

function App() {
  return (
    <div className="relative pb-15 min-h-screen">
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
