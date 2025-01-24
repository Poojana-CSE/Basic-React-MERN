// import React from 'react'
// //import Intro from './components/intro';
// import Info from './components/Info';
// const App = () => {
//   const handleclick_1=()=>{
//     alert("Button Clicked");
//   };
//   return (
//     <div>
//         <Info handleclick_1={handleclick_1}></Info>
//     </div>
    
//   )
// }

// export default App


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';

const App = () => {
  return (
    <div>
      <h2>This is my home page</h2>
        <div>
          <Routes>
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
    </div>
  );
};

export default App;

