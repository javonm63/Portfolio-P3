import './App.css'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import HomePage from './pages/homePage.jsx'
import Landing from './pages/landing.jsx'

function App() {
  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/" element={<Landing />} />       
          <Route path="/home" element={<HomePage />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App