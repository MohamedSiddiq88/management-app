import React from "react";
import Base from "../Base/Base";
import "./Add.css";



function AddTeacher({ data, setData }) {

  // to ahndel onsubmit
  const handelsubmit = (event) => {
    console.log(data)
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const clas = event.target.class.value;
    const bloodgroup = event.target.bloodgroup.value;

    setData([...data, { name, age, gender, subject: clas, bloodGroup: bloodgroup }])

    // to claear all field after updating
    event.target.reset();
  }

  return (
    <Base
      heading={"Add Data"}
    >


      {/* container */}
      <div className="container">

        {/* row*/}
        <div className="row add-container">




          {/* col add-form*/}
          <div className="col-12">
          <form className="container-fluid add-form" onSubmit={handelsubmit}>
            <h1 className="add-heading"><b>Add Teacher's Data</b></h1>
            <table>
              <tr>
                <th>Name:</th>
                <td><input placeholder='Enter Name' required name='name'></input></td>
              </tr>
              <tr>
                <th>Age:</th>
                <td><input type="number" placeholder='Enter Age' required name='age' ></input></td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td><input placeholder='Enter Gender' required name='gender'></input></td>
              </tr>
              <tr>
                <th>Subject:</th>
                <td><input placeholder='Enter Subject' required name='class'></input></td>
              </tr>
              <tr>
                <th>Blood Group:</th>
                <td><input placeholder='Enter Blood Group' required name='bloodgroup'></input></td>
              </tr>
            </table>

            <button className='btn btn-success'>Add</button>
          </form>
          </div>







        </div>


      </div>



    </Base>
  );

}



export default AddTeacher