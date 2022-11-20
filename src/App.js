import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { Foooter } from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={ 
          <HomePage/>
        } />
      </Routes>
      <Foooter/>
    </div>
  );
}

export default App;
