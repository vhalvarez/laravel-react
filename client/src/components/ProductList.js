import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const { data } = await axios.get("http://127.0.0.1:8000/api/products");
        setProducts(data);
    };

    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item xs={6} md={4}>
                    <ProductCard product={product} key={product.id} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
