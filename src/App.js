import ContactUs from "./COMPONENTS/Contact";
import HomePage from "./COMPONENTS/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentTable from "./COMPONENTS/Table";
import { useState } from "react";
import ContextData from "./ContextData";
import Edit from "./COMPONENTS/Edit";

function App() {
  const [data, setData] = useState(
      [ {name :"Ashu", age:21, course:"MERN", batch:"November"},
      {name :"Ritik", age:23, course:"MERN", batch:"November"},
      {name :"Ayush", age:25, course:"MERN", batch:"December"},
      {name :"Ankit", age:24, course:"MERN", batch:"October"},
      {name :"Lakshay", age:21, course:"MERN", batch:"November"},
      {name :"Deepika", age:21, course:"MERN", batch:"September"},
      {name :"Panda", age:22, course:"MERN", batch:"October"} ]
    );
  
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/contact' element={<ContactUs />}/>
      <Route path='/student' element={
        <ContextData.Provider value={{entries: data, updateFunction: setData}}>
          <StudentTable />
        </ContextData.Provider>
      }/>
      <Route path='/editStudent' element={
        <ContextData.Provider value={{entries:data,updateFunction:setData}}>
          <Edit />
        </ContextData.Provider>
      }/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;