import React from "react";


const ProductInfo = ({nazev, imgsrc}) => {
    return (
        <>
        <img src={imgsrc} alt={nazev} />
    
        <h3>{nazev}</h3>
    
        </>
    )
}

export default ProductInfo;