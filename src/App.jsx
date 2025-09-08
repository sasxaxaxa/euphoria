import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header.jsx";
import '../src/assets/styles/globals.scss'

function App() {

  return (
    <>
      <Router>
        <Header />
        <main>
        </main>
      </Router>
    </>
  )
}


export default App
