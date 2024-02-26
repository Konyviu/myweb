import ShowProduct from './ShowProduct'
import DeleteProduct from './DeleteProduct'
import UpdateProduct from './UpdateProduct'
import './App.css';
import { useState } from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [quantity, setQuantity] = useState('')
  // const history = useHistory()

  const addProductHandler = async () => {
    try{
      await axios.post('http://localhost:5000/AddProduct',{name,value,quantity})
      // history.push('/ShowProduct')
    }catch(error){
      console.log('Error adding product: ',error)
    }
  }

  const delProductHandler = async () => {
    try{
      await axios.delete('http://localhost:5000/DeleteProduct/${name}')
    }catch(error){
      console.log('Error deleting product: ',error)
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
                <button><strong>Update Product</strong></button>
              </div>
            </ul>
          </div>
          <Routes>
            <Route path = "/ShowProduct" element = {<ShowProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;