import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../api/api";
import { Row, Col, Image, Typography, Button, Spin, Rate, Tag, message, Divider } from "antd";
import { 
  ShoppingCartOutlined, 
  ArrowLeftOutlined, 
  HeartOutlined,
  ShareAltOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
  UndoOutlined
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProductById(id)
      .then(res => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    message.success(`${product.title} added to cart!`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="custom-spinner">
        <Spin size="large" />
      </div>
    );
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: "2rem" }}>
        <Button 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate(-1)}
          style={{ marginBottom: "1rem" }}
        >
          Back to Products
        </Button>
      </div>

      <Row gutter={[48, 32]}>
        {/* Product Image */}
        <Col xs={24} md={12}>
          <div style={{ 
            background: "white", 
            padding: "2rem", 
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            textAlign: "center"
          }}>
            <Image 
              src={product.image} 
              alt={product.title}
              style={{ maxHeight: "500px", objectFit: "contain" }}
              preview={{
                mask: "Click to preview"
              }}
            />
          </div>
        </Col>

        {/* Product Details */}
        <Col xs={24} md={12}>
          <div style={{ 
            background: "white", 
            padding: "2rem", 
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            height: "fit-content"
          }}>
            {/* Category Tag */}
            <Tag className="category-badge" style={{ marginBottom: "1rem" }}>
              {product.category}
            </Tag>

            {/* Product Title */}
            <Title level={1} style={{ marginBottom: "1rem", fontSize: "2rem" }}>
              {product.title}
            </Title>

            {/* Rating */}
            <div style={{ marginBottom: "1rem" }}>
              <Rate 
                disabled 
                defaultValue={product.rating?.rate || 4} 
                style={{ marginRight: "0.5rem" }}
              />
              <Text type="secondary">
                ({product.rating?.count || 0} reviews)
              </Text>
            </div>

            {/* Price */}
            <div style={{ marginBottom: "2rem" }}>
              <Title level={2} style={{ color: "#ff6b35", margin: 0 }}>
                {formatPrice(product.price)}
              </Title>
              <Text type="secondary" style={{ textDecoration: "line-through", marginLeft: "1rem" }}>
                {formatPrice(product.price * 1.2)}
              </Text>
              <Tag color="red" style={{ marginLeft: "1rem" }}>
                17% OFF
              </Tag>
            </div>

            <Divider />

            {/* Description */}
            <div style={{ marginBottom: "2rem" }}>
              <Title level={4}>Description</Title>
              <Paragraph style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                {product.description}
              </Paragraph>
            </div>

            {/* Features */}
            <div style={{ marginBottom: "2rem" }}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <div style={{ textAlign: "center", padding: "1rem" }}>
                    <TruckOutlined style={{ fontSize: "2rem", color: "#ff6b35", marginBottom: "0.5rem" }} />
                    <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>Free Shipping</div>
                    <div style={{ fontSize: "0.8rem", color: "#666" }}>On orders over $50</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: "center", padding: "1rem" }}>
                    <UndoOutlined style={{ fontSize: "2rem", color: "#ff6b35", marginBottom: "0.5rem" }} />
                    <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>Easy Returns</div>
                    <div style={{ fontSize: "0.8rem", color: "#666" }}>30-day return policy</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: "center", padding: "1rem" }}>
                    <SafetyCertificateOutlined style={{ fontSize: "2rem", color: "#ff6b35", marginBottom: "0.5rem" }} />
                    <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>Secure Payment</div>
                    <div style={{ fontSize: "0.8rem", color: "#666" }}>SSL encrypted</div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <Button 
                type="primary" 
                size="large"
                icon={<ShoppingCartOutlined />}
                onClick={handleAddToCart}
                className="animated-button"
                style={{ flex: 1, height: "50px", fontSize: "1.1rem" }}
              >
                Add to Cart
              </Button>
              <Button 
                size="large"
                icon={<HeartOutlined />}
                style={{ width: "60px", height: "50px" }}
              />
              <Button 
                size="large"
                icon={<ShareAltOutlined />}
                style={{ width: "60px", height: "50px" }}
              />
            </div>

            {/* Additional Info */}
            <div style={{ 
              background: "#f8f9fa", 
              padding: "1rem", 
              borderRadius: "8px",
              fontSize: "0.9rem",
              color: "#666"
            }}>
              <div>✓ In stock and ready to ship</div>
              <div>✓ Estimated delivery: 3-5 business days</div>
              <div>✓ 1-year manufacturer warranty</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
