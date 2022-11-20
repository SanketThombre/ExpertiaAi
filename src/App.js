import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { Foooter } from './Components/Footer';
import { Jobs } from './Components/Jobs';
import { JobDetail } from './Components/JobDetail';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={ 
          <HomePage/>
        } />
        <Route path="/jobs" element={ 
          <Jobs/>
        } />

         <Route path="/jobdetails" element={ 
          <JobDetail/>
        } />
      </Routes>
      <Foooter />
      
      
    </div>
  );
}

export default App;
