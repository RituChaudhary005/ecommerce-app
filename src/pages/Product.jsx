import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../api/api";
import { Row, Col, Image, Typography, Button, Spin } from "antd";

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(res => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spin size="large" style={{ display: "block", margin: "2rem auto" }} />;

  if (!product) return <p>Product not found</p>;

  return (
    <Row gutter={[16, 16]} style={{ padding: "2rem" }}>
      <Col xs={24} md={12}>
        <Image src={product.image} />
      </Col>
      <Col xs={24} md={12}>
        <Typography.Title level={2}>{product.title}</Typography.Title>
        <Typography.Paragraph>{product.description}</Typography.Paragraph>
        <Typography.Title level={3}>${product.price}</Typography.Title>
        <Button type="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
        <Button style={{ marginLeft: "1rem" }} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Col>
    </Row>
  );
};

export default Product;
