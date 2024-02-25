import logo from './logo.svg';
import ShowProduct from './ShowProduct'
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';
import './App.css';
import { useRef } from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <header className = "App-header">
        <p>
          Welcome to Product Management System
        </p>
        <BrowserRouter>
          <div>
            <ul classname = "App-BROWSER">
              <Link to = "/ShowProduct">Show Products<br /></Link>
              <Link to = "/AddProduct">Add Product<br /></Link>
              <Link to = "DeleteProduct">Delete Product<br /></Link>
              <Link to = "UpdateProduct">Update Product<br /></Link>
            </ul>
          </div>
          <Routes>
            <Route path = "/ShowProduct" element = {<ShowProduct />}></Route>
            <Route path = "/AddProduct" element = {<AddProduct />}></Route>
            <Route path = "/DeleteProduct" element = {<DeleteProduct />}></Route>
            <Route path = "/UpdateProduct" element = {<UpdateProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;