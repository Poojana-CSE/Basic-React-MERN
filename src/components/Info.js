import React from 'react'
import { useState } from 'react';
import './Info.css';
const Info = (props) => {
    const {handleclick_1}=props;
   const [count,setcount]=useState(0);
   const[username,setusername]=useState("Mahesh");
   const[user,setuser]=useState({Name:"Poojana",Age:18,Branch:"Computer Science And Engineering",College:"SECE",Location:"Coimbatore"})
   const handleclick=()=>setcount(count+1);
   const nameclick=()=>{
    username==='Mahesh'?setusername("kavin"):setusername("Mahesh");
   };

   const updateusername=()=>{
    setuser({...user,Name:"Poojana S"})
   }
   const updateage=()=>{
    setuser({...user,Age:19})
   }
   const updatebranch=()=>{
    setuser({...user,Branch:"CSE"})
   }

   const updatecollege=()=>{
    setuser({...user,College:"Sri Eshwar"})
   }
   const updatelocation=()=>{
    setuser({...user,Location:"Kinathukadavu"})
   }

  return (
    <div>
      <table>
        <tr>
          <th>Serial Numner</th>
          <th>User Name</th>
          <th>Age</th>
          <th>Branch</th>
          <th>College</th>
          <th>Location</th>
        </tr>
        <tr>
          <td>1</td>
          <td>{user.Name}</td>
          <td>{user.Age}</td>
          <td>{user.Branch}</td>
          <td>{user.College}</td>
          <td>{user.Location}</td>
        </tr>
        <tr>
          <td>Update Here --> </td>
          <td><button onClick={updateusername}>Update User Name</button></td>
          <td><button onClick={updateage}>Update User Age</button></td>
          <td><button onClick={updatebranch}>Update Branch</button></td>
          <td><button onClick={updatecollege}>Update College</button></td>
          <td><button onClick={updatelocation}>Update Location</button></td>
        </tr>
      </table>
        <button onClick={handleclick}>{count}</button>
        <button onClick={nameclick}>{username}</button>
        <button onClick={handleclick_1}>click</button>
        <h2>{user.Name}</h2>
        <button onClick={updateusername}>update username</button>
        <h2>{user.Age}</h2>
        <button onClick={updateage}>update Age</button> 
    </div>
  )
}
export default Info