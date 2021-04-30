import {useState} from 'react'
import _ from 'lodash';
import "./App.css"

const fruits = ["apple","banana","orange","peach","cherry","tomato"];

function App() {

  const [filteredArray, setFilteredArray] = useState([])
  const [input, setInput] = useState("")
  const filterFun1 = ()=>{
    const arr = _.difference(fruits,[input])
    
    setFilteredArray(arr)
  }
  const filterFun2 = ()=>{
    
    const arr = _.concat(fruits,[input]);
    console.log(arr)
    
    setFilteredArray(arr)
  }
  const filterFun3 = ()=>{

    const arrData = [...fruits]
    console.log(arrData)
    const arr = _.fill(arrData,[input]);
   
    setFilteredArray(arr)
  }

  return (
    <div className="App">
      <div className="array-list">
        <h1>filter through array using lordash library</h1>
      <h2>Array</h2>
      <ul className="list">
      {
        fruits.map((fruit)=>(
          <li>{fruit}</li>
        ))
      }
      </ul>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <div className="buttons">
      <button disabled={!input} onClick={filterFun1}>Filter Value</button>
      <button disabled={!input} onClick={filterFun2}>Add Value</button>
      <button disabled={!input} onClick={filterFun3}>Fill Array</button>
      </div>
      
      </div>
      
      <div className="array-list">
     {filteredArray=="" ? (<h1 style={{textAlign:"center"}}>Nothing to display</h1>) : (
       <>
       <h3 style={{textAlign:"center"}}>filtered array</h3>
       <ul className="list">
         {
          !filteredArray ? (
            <li></li>
          ) : (
           filteredArray.map((el,index)=>(
             <li key={index}>{el}</li>
           ))
          )
          
         }
       </ul>
       </>
     )} 
      </div>
    </div>
  );
}

export default App;
