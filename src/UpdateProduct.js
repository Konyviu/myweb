import { useState,useEffect } from "react";
import axios from "axios";

function UpdateProduct(){
    const [product,setProduct] = useState([])
    useEffect(() => {
        console.log("request to API")
        axios.get("http://localhost:5000/UpdateProduct").then(Response => setProduct(Response.data))
    },[])

    return (<></>)
  }

  export default UpdateProduct;