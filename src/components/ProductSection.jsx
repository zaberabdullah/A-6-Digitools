import React, { useEffect, useState } from 'react';

const ProductSection = ({handleAddToCart})=>{
    const [products, setProducts] = useState([]);
    const[activeTab, setActiveTab]= useState("products");

    useEffect(()=>{
        fetch("/public/products.json")
        .then ((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err)=> console.error("error message arrived:", err));
    })


    return (
        <div>
            
        </div>
    );
};

export default ProductSection;