import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

function AddProduct(){
    const [product,setProduct] = useState([])
    useEffect(() => {
        console.log("request to API")
        axios.get("http://localhost:5000/AddProduct").then(Response => setProduct(Response.data))
    },[])

    return (<></>)
  }

  export default AddProduct;