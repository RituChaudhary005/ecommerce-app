import React from "react";
import { Card, Button, Tag, Rate } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";

const ProductCard = ({ product }) => {
  const truncateTitle = (title, maxLength = 50) => {
    return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  return (
    <Card
      hoverable
      className="product-card fade-in"
      cover={
        <div style={{ 
          height: 220, 
          overflow: "hidden", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          background: "#f8f9fa",
          position: "relative"
        }}>
          <img 
            alt={product.title} 
            src={product.image} 
            style={{ 
              maxHeight: "100%", 
              maxWidth: "100%", 
              objectFit: "contain",
              transition: "transform 0.3s ease"
            }} 
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          />
          <div style={{
            position: "absolute",
            top: "10px",
            right: "10px"
          }}>
            <Tag className="category-badge">
              {product.category}
            </Tag>
          </div>
        </div>
      }
      style={{ 
        marginBottom: "1.5rem",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
      bodyStyle={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column",
        padding: "16px"
      }}
    >
      <div style={{ flex: 1 }}>
        <Card.Meta 
          title={
            <div style={{ 
              fontSize: "1rem", 
              fontWeight: "600",
              marginBottom: "0.5rem",
              lineHeight: "1.4"
            }}>
              {truncateTitle(product.title)}
            </div>
          }
          description={
            <div>
              <Rate 
                disabled 
                defaultValue={product.rating?.rate || 4} 
                style={{ fontSize: "14px", marginBottom: "0.5rem" }} 
              />
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "0.5rem" }}>
                ({product.rating?.count || 0} reviews)
              </div>
            </div>
          }
        />
      </div>
      
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginTop: "1rem"
      }}>
        <span className="price-tag">
          {formatPrice(product.price)}
        </span>
      </div>
      
      <div style={{ 
        display: "flex", 
        gap: "0.5rem", 
        marginTop: "1rem" 
      }}>
        <Link to={`/product/${product.id}`} style={{ flex: 1 }}>
          <Button 
            icon={<EyeOutlined />}
            style={{ width: "100%" }}
          >
            View
          </Button>
        </Link>
        <Button 
          type="primary" 
          icon={<ShoppingCartOutlined />}
          className="animated-button"
          style={{ flex: 1 }}
          onClick={(e) => {
            e.preventDefault();
            // This would typically call addToCart function
            console.log("Add to cart:", product.id);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
