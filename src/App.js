import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/home/HomePage';
import { Authentication } from './components/Authentication/Authentication';
import axios from 'axios';

function App() {
  axios.defaults.baseURL="h"
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={true?<HomePage/>:<Authentication/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
