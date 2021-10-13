import React,{useState} from "react";
import './App.css';
import Transaction from "./components/Transaction"


function App() {
  

const[inputValue,setInputValue]=useState('');
// const[transactOutput,setTransactOutput]=useState([])
const[totalValue,setTotalValue]=useState('')
const [addItems,setAddItems]=useState([])
const [subtractItems,setSubtractItems]=useState([])
const [showBothItems,setShowBothItems]=useState([])

// useEffect(() => {
 
// }, [])
// const expense=JSON.parse(localStorage.getItem('expenseItems'))
// if(data==""){
//  localStorage.setItem('expenseItems', JSON.stringify(showBothItems));
// }
// else{
//   showBothItems.push(data)
//   localStorage.setItem('expenseItems', JSON.stringify(showBothItems));
// }

// let data;
// let array;
// if(JSON.parse(localStorage.getItem('expenseItems'))===null){
//   localStorage.setItem('expenseItems', JSON.stringify(showBothItems))
// }else{
//    array=JSON.parse(localStorage.getItem('expenseItems'))
//   data=[...array,showBothItems]
//   localStorage.setItem('expenseItems', JSON.stringify(array))
// }
const handleAdd=(e)=>{
  e.preventDefault()
  
 if(inputValue!==''){
 
  //  setTransactOutput([...transactOutput,inputValue]);
   setTotalValue(Number(totalValue)+ Number(inputValue))
   let expenseNegative={
    category:'Add',
    value:inputValue,
    curTime:new Date().toLocaleString()
   
   }
   setAddItems([...addItems,expenseNegative])
   setShowBothItems([...showBothItems,expenseNegative])
  //  console.log(transactOutput)
   
 }
 
 

  setInputValue('')
}

const handleSubtract=(e)=>{
  e.preventDefault()
  
  if(inputValue!==''){
   
    // setTransactOutput([...transactOutput,inputValue]);
    setTotalValue(Number(totalValue)-Number(inputValue))
   let expenseNegative={
     category:'subtract',
     value:inputValue,
     curTime:new Date().toLocaleString()

    }
    setSubtractItems([...subtractItems,expenseNegative])
    setShowBothItems([...showBothItems,expenseNegative])

    // console.log(transactOutput)
    
  }
  
  
 
   setInputValue('')
  //  const data=JSON.parse(localStorage.getItem('expenseItems'))
  //  if(!data){
  //   localStorage.setItem('expenseItems', JSON.stringify(showBothItems));
  //  }
 }


 
return(
    <>
     <h3  className="exptrack-heading">Expense Tracker</h3>
   <div className="transaction-input">
     <h3 className="balance">Balance:{totalValue} </h3>
     <div className="calculation-area">
      <input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
       <button className="add" onClick={handleAdd}>Add</button>
       <button  className="remove" onClick={handleSubtract}>Remove</button>
       </div>
   </div>
   <div className="transaction-output">
      {/*dynamic portion */}
     
     {/* <p>addItems + {addItems}</p>
     <p> subItems + {subtractItems}</p>
  */}
    
  
    {showBothItems.map(item=>(
      <>
    {/* <p>{item.value}</p>
    <p>{item.category}</p>
    <p>{item.curTime}</p> */}
    <Transaction item={item}/>
    </>
    ))}
   
    
   </div>

    </>
)
}

export default App;
