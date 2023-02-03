import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import WeatherSection from './components/WeatherSection';


function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<WeatherSection />}/>
        <Route path="/:location" element={<WeatherSection />}/>
      </Routes>
    </div>
  );
}

export default App;
