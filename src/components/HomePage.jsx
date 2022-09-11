import React, { useEffect, useState }  from "react";
import ProductInfo from "./ProductInfo";
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    const [products, setProducts] = useState([""]);

    useEffect (() => {
        fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
         setProducts(data);
        });
      }, [])


    return (
        <>
        <div className="lead-text">
        <h2>Aktuální nabídka</h2>
        <p>Nejnovější prémiové produkty od předních českých designérů.</p>
        <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
        </div>
        <ul className="products-container">
        {products.map((item) => (
            <li key={item.id} className="product-info">
            <Link to={`/product${item.id}`}>
        <ProductInfo nazev={item.name} imgsrc={item.image}/>
        </Link>
        </li>
        ))}
        </ul>
        </>

       
    );

    
}

export default HomePage;   


