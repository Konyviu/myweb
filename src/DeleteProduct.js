import { useState,useEffect } from "react";
import axios from "axios";

function DeleteProduct(){
    const [product,setProduct] = useState([])
    useEffect(() => {
        console.log("request to API")
        axios.get("http://localhost:5000/DeleteProduct").then(Response => setProduct(Response.data))
    },[])

    return (<></>)
  }

  export default DeleteProduct;