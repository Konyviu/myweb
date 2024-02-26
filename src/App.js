import './App.css'
import ShowProduct from './ShowProduct'
import { useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [quantity, setQuantity] = useState('')
  const [products,setProducts] = useState([])
  const [error,setError] = useState('')

  const addProductHandler = async () => {
    try{
      await axios.post(`http://localhost:5000/AddProduct`,{name,value,quantity})
    }catch(error){
      console.log('Error adding product: ',error)
    }
  }

  const delProductHandler = async () => {
    try{
      await axios.delete(`http://localhost:5000/DeleteProduct/${name}`)
      console.log(`Product '${name}' deleted successfully.`)
    }catch(error){
      console.log('Error deleting product: ',error)
    }
  }

  const updProductHandler = async () => {
    try{
      await axios.put(`http://localhost:5000/UpdateProduct/${name}`,{value,quantity})
      console.log("Product '${name}' updated successfully.")
    }catch(error){
      console.log('Error updating product: ',error)
    }
  }

  return (
    <div className = "App">
      <header className = "App-header">
        <p>
          Welcome to Product Management System
        </p>
        <BrowserRouter>
          <div>
            <ul className = "App-BROWSER">
              <Link to = "/ShowProduct">Show Products<br /></Link>
              <div>
                Name &nbsp;&nbsp;<input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} /><br />
                Value &nbsp;&nbsp;<input type = "text" value = {value} onChange = {(e) => setValue(e.target.value)} /><br />
                Quantity &nbsp;&nbsp;<input type = "text" value = {quantity} onChange = {(e) => setQuantity(e.target.value)} /><br />
                <button onClick = {addProductHandler}><strong>Add Product</strong></button>&nbsp;&nbsp;
                <button onClick = {delProductHandler}><strong>Delete Product</strong></button>&nbsp;&nbsp;
                <button onClick = {updProductHandler}><strong>Update Product</strong></button>
              </div>
            </ul>
          </div>
          <Routes>
            <Route path = "/ShowProduct" element = {<ShowProduct />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;