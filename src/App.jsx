import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import Landing from './pages/landing'

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