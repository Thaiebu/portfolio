import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route path='*' element={<Home/>}/>
      <Route index element={<Home/>}/>
      <Route path='/portfolio/about' element={<About/>}/>
      <Route path='/portfolio/contact' element={<Contact/>}/>

      </Route>
      

    </Routes>

     
    </>
  );
}

export default App;
