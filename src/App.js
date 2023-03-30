
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Feedback from './components/Feedback';
import Card from './components/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React  from 'react';

const App=()=> {
  
  
  
  

    

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Feedback />}  />
            {/* <Route exact path='/blogs' element={<Blog  />}  /> */}
            {/* <Route exact path='/home' element={<Topcontainer  />}   /> */}
            <Route exact path='/profile' element={<Card  />}   />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
