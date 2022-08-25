import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './component/Header/Header';
import SideBar from "./component/SideBar/SideBar";
import Footer from './component/Footer/Footer';


import Home from './page/Home/Home'
import Flowers from './page/flower/Flowers'
import About from './page/About/About'
import Contact from './page/Contact/Contact'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div>

        <Header />
        <main className="main" >
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/flowers/*" element={<Flowers />} >
            </Route>
          </Routes>
        </main>
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;
