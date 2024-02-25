import { useState,useEffect } from "react";
import axios from "axios";

function ShowProduct(){
    const [product,setProduct] = useState([])
    useEffect(() => {
        console.log("request to API")
        axios.get("http://localhost:5000/ShowProduct").then(Response => setProduct(Response.data))
    },[])

    const productList = product.map(p => <li>{p.Name}{p.Value}{p.Quantity}</li>)

    return (<ul>{productList}</ul>)
  }

  export default ShowProduct;