import React, { useEffect, useState } from 'react'
import {AiFillDelete} from "react-icons/ai"
const AllEntry = () => {
  const [dataEntries,setDataEntries] = useState();
  async function response(){
    try{
      const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getAllEntry`);
      // console.log(result);
      const ans = await result.json();
      console.log("Answer");
      console.log(ans); 

      setDataEntries(ans.data);
      // const data  = await fetch(result.url);
      // console.log("data",data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    response();
  },[]);
  console.log("Data-Entries",dataEntries);

  const deleteHandler = async (entry) => {
    const id = entry._id;
    console.log("id",id);
    console.log(entry.title);
    try{
      const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteTask/${id}`,{
        method: 'DELETE',
      });
      response();
    }
    catch(err){
      console.log("error in deleting any event",err);
    }
  }
  return (
    <div>
      <div className='w-[580px] flex flex-col gap-5'>
        {
          dataEntries?.map((entry)=>(
            <div key={entry._id} className='flex w-full justify-evenly items-center gap-4 border-2 border-blue-900 rounded-md bg-blue-400'>
              <div className='w-[60%]'>
                <h3 className='text-xl font-bold text-white '>{entry.title}</h3>
                <p className='font-serif'> {entry.desc} </p>
              </div>
              <button className='text-xl hover:scale-95' onClick={()=>deleteHandler(entry)}><AiFillDelete/></button>
            </div>
          ))
        }
        
      </div>

    </div>
  )
}

export default AllEntry