import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import Textform from './components/Textform';


function App() {
  return (
    <>
      {/* {<Navbar title="Textutils" aboutText="About Us"/>} */}
      {/* {<Navbar/>} */}
      <Navbar title="Textutils" />
      <div className="container my-3">
       {/*<Textform heading="Enter the text" />*/}
       <About/>
      </div>
    </>
  );
}

export default App;


