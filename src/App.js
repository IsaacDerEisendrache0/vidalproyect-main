import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import About from './pages/About';
import Home from './pages/Home';
import Default from './pages/Default';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />}/>
          <Route path="/" element={<Home />}/>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="*" element={<Default />}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
