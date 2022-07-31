import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ product }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}{" "}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>

                    {/* {product.availability === 1 ? (
                        <Button size="small" color="success">
                            Availability
                        </Button>
                    ) : (
                        <Button size="small" color="danger">
                            No availability
                        </Button>
                    )} */}
                </CardActions>
            </Card>
        </>
    );
};

export default ProductCard;
