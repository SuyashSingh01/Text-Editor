import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { DataContext } from '../context/DataContext';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button } from '@mui/material';



const AI = () => {
  const {prompt,setPrompt,data,submitHandler,handleClearClick,copyText,AIresponse}=useContext(DataContext);
  const { speak } = useSpeechSynthesis();
  
  // function changeHandler(e){
  //   setPrompt((e)=>{
  //   return {
  //     ...e,
  //     [e.target.name] :e.target.value
  //   }
  // });
  // }
  return (
    <>
    <div className='text-center text-sky-600 font-extrabold text-3xl'>AI BOT</div>
    <div className='flex flex-col w-full mb-[100px]'>
          <div className='bg-zinc-100 max-w-[1000px] flex justify-around mt-5 mb-9  leading-2 text-richblack-900 rounded-lg p-4 min-h-[300px]'>
          {
              !data||data.length===1?<p>No Result Found</p>:<p>{data}</p>
          }
          </div>
        <div className='flex flex-col '>
         <form className='flex flex-wrap items-center justify-center max-w-[1000px]' action="submit" onSubmit={submitHandler}>
        <input className="w-[1000px] rounded-2xl h-[50px] text-sky-900 p-2" type="type" value ={prompt} placeholder='Prompt' onChange={(e)=>{
          setPrompt(e.target.value);
        }} />
        </form>
        <div className='flex gap-x-2 mt-[50px] '>
        <Button className='btn-text'variant="outlined" size="medium" id="speak-Button" onClick={() => speak({ text:data })}>Speech</Button>
        <Button className='btn-text'variant="outlined" size="medium" onClick={handleClearClick}>Clear Text</Button>
        <Button className='btn-text'variant="outlined" size="medium" onClick={copyText}>Copy Text</Button>
        </div>
        </div>

    </div>
    </>
  )
}

export default AI;
