import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import DashBoard from './Components/DashBoard';
import Studentsprofiles from './Components/Studentsprofiles';
import Teachersprofiles from './Components/Teachersprofiles';
import Add from './Components/Add';
import Edit from './Components/Edit';
import data1 from "./data/data";
import data_2 from "./data/teachersdata";
import { useState } from 'react';
import EditTeacher from './Components/EditTeacher';
import AddTeacher from './Components/AddTeacher';



function App() {
  
  const [data,setData]=useState(data1);
  const [data2,setData2]=useState(data_2);
  const [ind,setInd]=useState();
  return (
    <div className="App">
      
      
      <Switch>
        <Route exact path="/">
          <DashBoard
          stuData={data}
          techData={data2}
          ></DashBoard>
        </Route>

        <Route path="/student">
          <Studentsprofiles
          data={data}
          setData={setData}
          setInd={setInd}
          ></Studentsprofiles>
        </Route>


        <Route path="/teacher">
          <Teachersprofiles
          data={data2}
          setData={setData2}
          setInd={setInd}
          ></Teachersprofiles>
        </Route>


        <Route path="/add">
          <Add
          data={data}
          setData={setData}
          ></Add>
        </Route>


        <Route path="/addteacher">
          <AddTeacher
          data={data2}
          setData={setData2}
          ></AddTeacher>
        </Route>


        <Route path="/edit">
          <Edit
          ind={ind}
          setInd={setInd}
          data={data}
          setData={setData}
          ></Edit>
        </Route>



        <Route path="/editteacher">
          <EditTeacher
          ind={ind}
          setInd={setInd}
          data={data2}
          setData={setData2}
          ></EditTeacher>
        </Route>



      </Switch>


    </div>
  );
}

export default App;
