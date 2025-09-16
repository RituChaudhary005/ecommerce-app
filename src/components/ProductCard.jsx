import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card
      hoverable
      cover={<img alt={product.title} src={product.image} style={{ height: 200, objectFit: "contain" }} />}
      style={{ marginBottom: "1rem" }}
    >
      <Card.Meta title={product.title} description={`$${product.price}`} />
      <Link to={`/product/${product.id}`}>
        <Button type="primary" style={{ marginTop: "1rem", width: "100%" }}>
          View Product
        </Button>
      </Link>
    </Card>
  );
};

export default ProductCard;
