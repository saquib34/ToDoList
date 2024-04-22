'use client'
import React, { useState } from 'react'

function page() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTasks, setmainTasks] = useState([]); 
  const submitHandler = (e) => {  
    e.preventDefault()
    setmainTasks([...mainTasks, {title,desc}]);
    setdesc("")
    settitle("")
    console.log(mainTasks)
  }
  let renderTasks= <h2>No Task Avilable</h2>;
  if(mainTasks.length>0){
      renderTasks=mainTasks.map((task, index)=>{
        return(
    
       <li key={index} className='list-none flex items-center justify-between' >  <div  className='flex  items-center justify-between mb-4 w-2/3'>
            <h5 className='text-2xl font-semibold'>{task.title}</h5>
            <h6 className='text-xl font-semibold'>{task.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            let tempTasks = [...mainTasks];
            tempTasks.splice(index, 1);
            setmainTasks(tempTasks);
          }}
          className='bg-red-400 text-white px-4 py-2 font-bold rounded m-5'>Delete</button>
          </li>
        );
      });
  }

  return (
    <>

    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>TO DO LIST </h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md' placeholder='Add Title'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md' placeholder='Enter Description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}/>
      <button className='bg-black text-white px-4 py-3 font-bold rounded m-5'>Add Task</button>


    </form>
    <hr />
    <div className='p-8 bg-slate-200'>{renderTasks}</div>
  
    </>
    
  )
}

export default page
