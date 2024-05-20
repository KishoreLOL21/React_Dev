import React from "react";
import { useState } from "react";
import "./Body.css";

const Body = () =>{
    const [name,setName] = useState("");
    const [regno,setRegno] = useState("");
    const [email,setEmail] = useState("");
    const [table,setTable] = useState([]);

    function handle_name_change(e){
        setName(e.target.value);
        console.log(name);
    }

    function handle_regno_change(e){
        setRegno(e.target.value);
        console.log(regno);
    }

    function handle_email_change(e){
        setEmail(e.target.value);
        console.log(email);
    }

    function handle_submit(){
        const data = {name,regno,email};
        setTable([...table,data]);
    }

    return(
        <div id = "Body">
            <h3>Student Details</h3>
            <div id = "input">
                <div id = "rec">
                    <label htmlFor = "name">Enter Name : </label>
                    <input type = "text" id = "name" value = {name} onChange={handle_name_change}></input>
                </div>
                <div id = "rec">
                    <label htmlFor = "regno">Enter RegNo: </label>
                    <input type = "text" id = "regno" value = {regno} onChange={handle_regno_change}></input>
                </div>
                <div id = "rec">
                    <label htmlFor = "email">Enter EmailID:  </label>
                    <input type = "email" id = "email" value = {email} onChange={handle_email_change}></input>
                </div>
                <button id = "submit" onClick={handle_submit}>Submit</button>
            </div>
            <div id = "disp">
                <table id = "my_table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reg_No</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table.map((data,index) => (
                                <tr key = "index">
                                    <td>{data.name}</td>
                                    <td>{data.regno}</td> 
                                    <td>{data.email}</td>   
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Body;