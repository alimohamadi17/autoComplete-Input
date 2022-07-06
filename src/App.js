import './App.css';
import Task2 from './components/main/index';
import Navbar from './components/navbar/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Task1 from './components/task1/task1';
import Doc from './components/docus/doc';
import imgBack from '../src/asset/Sweden.jpg';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <img src={imgBack} alt="SwedenPicture" className='img-background' />


        <Routes>
          <Route exact path='/' element={< Task2 />}></Route>
          <Route exact path='/task1' element={< Task1 />}></Route>
          <Route exact path='/document' element={< Doc />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
