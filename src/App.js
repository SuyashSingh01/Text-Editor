
import Navbar from './component/Navbar';
import './App.css';
import Textform from './component/Textform.js';
import Contact from './component/Contact';
import AI from './component/Gemini.js';
import FooterSec from './component/FooterSec.js';
// import { RichTextEditor } from '@syncfusion/ej2-react-richtexteditor/index.js';
// import RichText from "./component/RichText.tsx";
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor/index.js';
import DocumentEditor from './component/DocumentEditor.tsx';


function App() {
  return (
      <div className=' w-full  min-h-screen bg-slate-200'>
        <div>
        <Navbar tittle="Suyash" />
        </div>

        <div className="container my-3" >
          {/* <RichText/> */}
          {/* <RichTextEditorComponent/> */}
          <Textform heading="Text Editor" preview="Here is the Preview" />
          <div className='h-[50rem] mt-[100px] mx-10'>
          <DocumentEditor/>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          {/* <Contact /> */}
          <div className='mt-9 flex flex-col justify-center max-w-[1000px] w-full mx-auto '>
          <AI />
          </div>
        </div>
          <div className='bg-slate-300'>
            <FooterSec />
          </div>

      </div>

  );
}


export default App;
