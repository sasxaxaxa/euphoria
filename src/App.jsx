import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/layout/Header/Header.jsx";
import '../src/assets/styles/globals.scss'
import Home from "./pages/Home/Home.jsx";

function App() {

  return (
    <>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}


export default App
