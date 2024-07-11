import React , { useState } from 'react'
import { Button } from '@mui/material';
// import text2speech from '../../public/text2speech'
import { useSpeechSynthesis } from 'react-speech-kit';


export default function Textform(props) {
  const [text, setText] = useState("Enter text Here");

  const handleUpClick = () => {
    // console.log("uppercase was clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLoClick = () => {
    // console.log("lowercase was clicked" +text);
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleClearClick = () => {
    // console.log("lowercase was clicked" +text);
    let newtext = "";
    setText(newtext);
  }
  const Rendertext = () => {
    // console.log("lowercase was clicked" +text); 
    // let span = document.getElementById("output");
    let newtext = document.getElementById("textbox");
    setText(newtext);
  }
  const handleonchange = (event) => {
    // console.log("onchange" );
    setText(event.target.value);

  }
  
// the function of copy Button
const copyText = () => {
    navigator.clipboard.writeText(text)
  }
  const handleCapitalWord = () =>{
    const arr = text.split(" ")
    for(var i =0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    const newtet = arr.join(" ")
    setText(newtet)
  }
  const { speak } = useSpeechSynthesis();
  
  return (
    <>
      <h1 className='mb-[50px] text-center text-4xl  underline text-red-800'>{props.heading}</h1>
      <div className="flex mb-3  justify-center flex-wrap">
        <textarea className="form-control  mx-8 my-9" id="textbox" rows="10" value={text} onChange={handleonchange}></textarea>
        <div className='flex text-center sm:flex-row flex-col sm:gap-x-4 gap-1 text-sky-600 font-bold max-w-[600px]'>
        <Button className='btn-text'variant="outlined" size="medium" onClick={handleUpClick}>Convert All To Uppercase</Button>
        <Button className='btn-text'variant="outlined" size="medium" onClick={handleLoClick}>Convert All To Lowercase</Button>
        <Button className='btn-text'variant="outlined" size="medium" id="speak-Button" onClick={() => speak({ text: text })}>Speech</Button>
        <Button className='btn-text'variant="outlined" size="medium" onClick={handleClearClick}>Clear Text</Button>
        <Button className='btn-text'variant="outlined" size="medium" onClick={copyText}>Copy Text</Button>
        <Button className='btn-text'variant="outlined" size="medium" onClick={handleCapitalWord}>Capital Word</Button>
        </div>
      </div>
      <div className='flex mb-3 ml-9 justify-center flex-col flex-wrap mx-10'>
        <h2 className='pre-h2 text-orange-600 text-xl'>{props.preview}</h2>
        <p className='text-rose-900'>{text.split(" ").length} Words <span className='mr-2'>{text.length}
        </span>Characters</p>
        <p className='text-green-600'>{text.split(" ").length * 0.008} Minutes To Read</p>
        {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea> */}
        <p  className='text-blue-400 border-2 min-h-[100px] p-3 h-full border-zinc-900 '>{text}</p>
        {/* <Button className='Preview btn-text' variant="outlined" size="medium" onClick={Rendertext} >Text Preview</Button> */}
      </div>
    </>
  )
}