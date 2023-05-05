import React from "react";
import Base from "../Base/Base";
import "./Add.css"
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditTeacher({ ind, setInd, data, setData }) {

  const history = useHistory();

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [clas, setClas] = useState("")
  const [bloodgroup, setBloodGroup] = useState("")



  useEffect(() => {
    const editStudent = data[ind]
    setName(editStudent.name)
    setAge(editStudent.age)
    setGender(editStudent.gender)
    setClas(editStudent.subject)
    setBloodGroup(editStudent.bloodGroup)
  }, [data, ind])

  function onUpdate1(event) {
    event.preventDefault();
    data[ind].name = name
    data[ind].age = age
    data[ind].gender = gender
    data[ind].subject = clas
    data[ind].bloodGroup = bloodgroup
  }


  return (


    <Base
      heading={"Edit Data"}
    >



      <div className="container">
        {/* row*/}
        <div className="row add-container">


          <div className="col-12">
            {/* col add-form*/}
          <form className="container add-form" onSubmit={(e) => (onUpdate1(e), history.push("/teacher"))}>
            <h1 className="add-heading"><b>Edit Student's Data</b></h1>
            <table>
              <tr>
                <th>Name:</th>
                <td><input placeholder='Enter Name' name='name' value={name} onChange={(e) => setName(e.target.value)} autoFocus required></input></td>
              </tr>
              <tr>
                <th>Age:</th>
                <td><input type="number" placeholder='Enter Age' required name='age' value={age} onChange={(e) => setAge(e.target.value)}></input></td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td><input placeholder='Enter Gender' required name='gender' value={gender} onChange={(e) => setGender(e.target.value)}></input></td>
              </tr>
              <tr>
                <th>Subject:</th>
                <td><input placeholder='Enter Class' required name='class' value={clas} onChange={(e) => setClas(e.target.value)}></input></td>
              </tr>
              <tr>
                <th>Blood Group:</th>
                <td><input placeholder='Enter Blood Group' required name='bloodgroup' value={bloodgroup} onChange={(e) => setBloodGroup(e.target.value)}></input></td>
              </tr>
            </table>


            <button className='btn btn-success'>Update</button>
          </form>

          </div>






        </div>
      </div>






    </Base>
  );




}



export default EditTeacher