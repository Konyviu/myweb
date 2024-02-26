import React, { useState,useEffect } from "react"
import axios from "axios"

function ShowProduct(){
    const [productList,setProductList] = useState([])
    useEffect(() => {
        console.log("request to API")
        axios.get("http://localhost:5000/ShowProduct")
        .then((response) => setProductList(response.data))
        .catch((error) => console.error("Error fetching data:", error))
    },[])

    console.log(productList)

    return (
    <ul>
        {/* <li>{productList}</li> */}
        {productList.map((product,idx) => (
            <li key = {idx}>
                <span>Name: {product.Name}</span>
                <span>Value: {product.Value}</span>
                <span>Quantity: {product.Quantity}</span>
            </li>
        ))}
    </ul>
    )
  }

  export default ShowProduct;