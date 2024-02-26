import { useState,useEffect } from "react";
import axios from "axios";

function ShowProduct(){
    const [products,setProducts] = useState([])
    const [error,setError] = useState('')

    useEffect(() => {
        console.log("request to API")
        fetchData()
    },[])

    const fetchData = async () => {
        try{
          const response = await axios.get('http://localhost:5000/ShowProduct')
          setProducts(response.data.Product)
        }catch(error){
          setError('Error fetching product data.')
        }
      }

    return (
    <div>
        <h4>Products</h4>
        {error && <p>{error}</p>}
        <ul>
            {products.map(product => (
                <li key = {product._id}>
                    <h5>{product.Name}</h5>
                    <h5>Value: {product.Value}</h5>
                    <h5>Quantity: {product.Quantity}</h5>
                </li>
            ))}
        </ul>
    </div>
    )
  }

  export default ShowProduct;