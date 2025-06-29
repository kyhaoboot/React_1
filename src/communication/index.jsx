import React, {useState} from 'react'
import Child from './child'
export default function index() {
  const [user, setUser] = useState("Kỳ Hảo");
  const [age, setAge] = useState(26);
  const handleChangeUser = ()=>{
    setUser("CyberSoft");
  };
  const handleGetUserReset = (userData)=>{
    // Nhận lại dữ liệu từ component con
    console.log(userData)
    setUser(userData);
  } 
    return (
    <div>
      <h1>Communication Hello</h1>
      <p>Username: {user} - {age}</p>
      
      <button onClick={handleChangeUser} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Change User</button>
      <Child user={user} age ={age} handleGetUser = {handleGetUserReset}/>
    </div>
  )
}
