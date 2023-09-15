import React, { useState } from 'react'
import {MdCreate} from "react-icons/md"
const NewEntry = () => {
  const [formData,setFormData] = useState({
    title:"",
    desc:""
  });


  const handleForm = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    })
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {...formData};
    // console.log("User-data",userData);

    try{
      // console.log("url",`${process.env.REACT_APP_BACKEND_URL}`);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/createNewTask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
    }
    catch(err){
      console.log(err);
    }

    window.location.reload();
  }


  return (
    <div className='w-full'>
      <form className='w-full mx-auto flex flex-col gap-5 justify-center items-center ' 
      onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='border-2 border-[#EA906C] rounded-md w-[75%] h-10 placeholder:text-center text-center'
          name='title'
          placeholder='Enter title of task'
          onChange={handleForm}
          value={formData.title}
        />

        <input
          type="text"
          className='border-2 rounded-md border-[#EA906C] w-[75%] h-10 placeholder:text-center text-center'
          name='desc'
          placeholder='Enter description of task'
          onChange={handleForm}
          value={formData.desc}
        />

        <button type='submit' className='border-2 font-bold text-xl  border-[#EA906C] p-2 px-4 rounded-md text-center hover:bg-yellow-400 hover:border-yellow-600 bg-white'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewEntry