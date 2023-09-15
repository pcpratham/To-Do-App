import './App.css';
import NewEntry from "./components/NewEntry";
import AllEntry from './components/AllEntry';
import Footer from './components/Footer';


function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <h1 className='text-center text-5xl m-2 mt-4'>To-Do List</h1>
      <div className=' h-max flex flex-col justify-center items-center gap-6 '>
      <NewEntry/>
      <AllEntry/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
