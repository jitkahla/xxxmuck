import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductPage.css';


const ProductPage = () => {
    let params = useParams();
    const [product, setProduct] = useState({});


    useEffect (() => {
        fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${params.productId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
         setProduct(data);
        });
      }, [])
   
    return (
      
<div className="product-order">
        
        <img src={product.image} alt={product.name} />
        <div className="product-description">
        <h2>{product.name}</h2>
        <button>Objednat</button>
        </div>
        </div>  
       
    )
}

export default ProductPage;