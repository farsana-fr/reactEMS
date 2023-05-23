
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/Add' element={<Add></Add>}/>
        <Route path='/Edit/:id' element={<Edit></Edit>}/>
        <Route path='/View/:id' element={<View></View>}/>
          
      
      </Routes>
      
     <Footer></Footer>
    </div>
  );
}

export default App;
