import React from "react";
import Base from "../Base/Base";
import { useHistory } from 'react-router-dom'


function Studentsprofiles({data,setData,setInd}){
    const history=useHistory();
    return (
        <Base
        heading={"Students Profiles"}
        >
            <div className="add-btn-div">
                <button className="btn btn-primary" onClick={()=>history.push("/add")}>Add Student</button>
            </div>
        {/* student content */}
            <table className="container-fluid">
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Class</th>
                    <th>Blood Group</th>
                    <th>Action</th>
                </tr>

                {
                data.map((ele,ind)=>(
                    <tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.age}</td>
                        <td>{ele.gender}</td>
                        <td>{ele.class}</td>
                        <td>{ele.bloodGroup}</td>

                        
                        {/* buttons */}
                        <td>
                            <div className="button-group" style={{display:"flex"}}>

                                {/* Edit */}
                                <button className="btn btn-primary" onClick={()=>(history.push("/edit"),setInd(ind))}>Edit</button>

                                {/* Delete */}
                                <button className="btn btn-danger" onClick={()=>(setData(data.filter((ele,inx)=>inx!=ind)))}>Delete</button>
                            
                            
                            </div>
                        </td>



                    </tr>
                ))
                
            }

            </table>
       



        </Base>
    );
}





export default Studentsprofiles
