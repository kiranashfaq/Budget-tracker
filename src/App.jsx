import { useState } from 'react'
import './App.css'

function App() {
  // for set budget value 
  const [Value,setValue] = useState()
const [Budget,setBudget] = useState([])
const [NewBudget,setNewBudget] = useState(0)
// for cost product 
const [Cost,setCost] = useState()
const [CostName,setCostName] = useState([])
// for product name 
const [Product,setProduct] = useState()
const [ProductName,setProductName] = useState([])
// for balance 
const [balance, setBalance] = useState(0);
// for show cost and Product name together 
const[CostProduct,setCostProduct] = useState([])
// for update budget input value 
const changeValue =(e)=>setValue(e.target.value)
// for update cost input value 
const changeCost = (e)=>setCost(e.target.value)
// for update productname  input value 
const changeProduct = (e)=>setProduct(e.target.value)
// FOR manage expenses 
const [Expenses,setExpenses] = useState(0)

function add(){
  setBudget([...Budget, Value])
  setValue("")
  setBalance(balance + parseInt(Value));
  setNewBudget(NewBudget + parseInt(Value))
  if(Value ===""){
    alert("please fill field")
  }
}

function additem(){

  if(parseInt(balance) < parseInt(Cost)){
    alert("Insufficient balance!")
    return
}else if(Cost == "" || Product == ""){
    alert("Please fill both fields!")
    return
}
setCostName([... CostName,Cost])
setProduct('')
setCost('')
setProductName([...ProductName,Product])
setBalance(balance - parseInt(Cost))
setCostProduct([...CostProduct,{name:Product,cost: Cost}])
setExpenses(Expenses + parseInt(Cost))
}

  return (
    <>
    <div className="main-div">
  <h1 className="name">Budget Balance</h1>
  <div className="main-sec-div">
    <div className="sec-1">
      <h1>Budget</h1>
      <input type="text" id="budget-input" value={Value} onChange={changeValue} placeholder="Enter your budget" />
      <div>
        <button id="set-budget" onClick={add}>Set Budget</button>
      </div>
     
    </div>
    <div className="sec-2">
      <h1>Expenses</h1>
      <input
        type="text"
        id="tittle-product"
        placeholder="Enter Tittle of Product"
        value={Product} onChange={changeProduct}
      />
      <input
        type="text"
        id="cost-product"
        placeholder="Enter Cost of Product"
        value={Cost} onChange={changeCost}
      />
      <button id="check-amount" onClick={additem}>Check Amount</button>
    </div>
  </div>
  <div className="budget-list">
    <div className="total-budget">
      <h2>Total Budget</h2>
      <span id="total-budget-value">{NewBudget}</span>
    </div>
    <div className="expenses">
      <h2>Expenses</h2>
      <span id="total-expenses-value">{Expenses}</span>
    </div>
    <div className="balance">
      <h2>Balance</h2>
      <span id="total-balance-value">{balance}</span>
    </div>
  </div>
  <div className="expenses-list">
    <h1>Expenses List</h1>
    <ul id="expenses-list-items">
    
      
{
  CostProduct.map((itemList,index)=>(
    <li key={index}>{itemList.name} <span>{itemList.cost}</span></li>
  ))
}

    </ul>
  </div>
</div>

    </>
  )
}

export default App
