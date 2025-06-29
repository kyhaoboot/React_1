import React from 'react'

export default function Child(props) {
    // console.log(props)
    const handleResetUser = ()=>{
        const resetUser = "Kỳ Hảo"
        // console.log(resetUser);
        props.handleGetUser(resetUser)
  }
  return (
    <div className='border-1 w-50 bg-black text-white'>
      <h1>Hảo Con</h1>
      <p>Username: {props.user} - {props.age}</p>
       <button onClick={handleResetUser}  type="button" className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset User</button>
    </div>
  )
}
