
import Navbar from './component/Navbar';
import './App.css';
import Textform from './component/Textform.js';
import Contact from './component/Contact';
import AI from './component/Gemini.js';
import FooterSec from './component/FooterSec.js';


function App() {
  return (
      <div className='w-full  min-h-screen bg-slate-200'>
        <Navbar tittle="Suyash" />
        <div className="container my-3" >
          <Textform heading="Text Editor" preview="Here is the Preview" />
        </div>

        <div className='flex justify-center items-center'>
          {/* <Contact /> */}
          <div className='mt-9 flex flex-col justify-center'>
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
