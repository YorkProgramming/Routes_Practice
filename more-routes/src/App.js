import './App.css';
import {BrowserRouter, useParams, useState, Routes, Route, Link} from 'react-router-dom'
import Number from './components/Number';
import Word from './components/Word'
import Home from './components/Home'


// const Number = (props) => { 
//   const { numLock, word } = useParams();
    
//   return (
//     <div>
//       <h1>Your Lucky Number is { numLock }!</h1>
//       <Link to={`/${word}/red/green`}>button</Link>
//     </div>
    
//   );
// }



// const Home = (props) => {
//   return (
//     <div>
//       <h1>
//         Home Component
//       </h1>
//       <Link to={'/99'}>Button</Link>
//     </div>
//   )
// }



// const Word = (props) => {
//   const { word, color, color2 } = useParams();

//   const style = {
//     color: color,
//     backgroundColor: color2,
//     padding: '10px',
//     borderRadius: '5px'
//   };

//   return (
//     <div style={style}>
//       <h1>Word of the day is: { word }!</h1>
//       <Link to={'/'}>Button</Link>
//     </div>
//   )
// }


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:numLock' element={<Number />}/>
        <Route path="/:word/:color/:color2" element={<Word />} />


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
