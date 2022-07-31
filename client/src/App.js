import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

import ProductList from "./components/ProductList";

const App = () => {
    return (
        <>
            <Navbar />

            <Box
                sx={{ p: 4}}
                display="flex"
                flexDirection="column"
            >
                <ProductList />
            </Box>
        </>
    );
};

export default App;
