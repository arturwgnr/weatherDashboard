import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Weather from './pages/Weather'
import './App.css'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Weather/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
