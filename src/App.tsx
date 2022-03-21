// import FirstComp from "./Components/Signup";
// import SecondComp from "./Components/Signup"


// function App() {
//   return (
//     <div className="App">
//       <div style={{ border: "2px solid black" }}>
//         <FirstComp />
//       </div>
//       <SecondComp />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import SignUp from "./Components/Signup"
import NavBar from './Components/Navbar';


function App() {

  return (
    <div className="container bg-gradient">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
