import { useState } from "react"
import "./styles.css"

export default function App() {
 const [newItem, setNewItem] = useState("")
 const [todos, setTedos] = useState([])
//  setNewItem("")

function handleSubmit(e) {
  e.preventDefault()

  setTedos([...todos,])
}

  return(
  <>  <form onSubmit className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">To do List</h1>
  <ul className="list">
    <li>
      <lable> 
        <input type="checkbox" />
        Item 1
      </lable>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <lable> 
        <input type="checkbox" />
        Item 2
      </lable>
      <button className="btn btn-danger">Delete</button>
    </li>

    
    
  </ul>
  </>

)
} 