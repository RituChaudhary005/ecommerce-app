import React from "react";
import { List, Button, Typography, Empty, Row, Col, Card, InputNumber, message } from "antd";
import { 
  DeleteOutlined, 
  ShoppingOutlined, 
  CreditCardOutlined,
  SafetyCertificateOutlined 
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const itemCount = cart.length;
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleRemove = (item) => {
    removeFromCart(item.id);
    message.success(`${item.title} removed from cart`);
  };

  const handleCheckout = () => {
    message.success("Checkout functionality would be implemented here!");
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <Title level={2} style={{ marginBottom: "2rem", textAlign: "center" }}>
        Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
      </Title>
      
      {cart.length === 0 ? (
        <div className="empty-state">
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <div>
                <Title level={4} style={{ color: "#999" }}>Your cart is empty</Title>
                <Text type="secondary">Looks like you haven't added any items to your cart yet.</Text>
              </div>
            }
          >
            <Link to="/">
              <Button type="primary" size="large" icon={<ShoppingOutlined />}>
                Start Shopping
              </Button>
            </Link>
          </Empty>
        </div>
      ) : (
        <Row gutter={[24, 24]}>
          {/* Cart Items */}
          <Col xs={24} lg={16}>
            <Card title="Cart Items" style={{ marginBottom: "1rem" }}>
              <List
                itemLayout="horizontal"
                dataSource={cart}
                renderItem={item => (
                  <List.Item className="cart-item" style={{ padding: "1rem", marginBottom: "1rem" }}>
                    <List.Item.Meta
                      avatar={
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          style={{ 
                            width: 80, 
                            height: 80, 
                            objectFit: "contain",
                            borderRadius: "8px",
                            background: "#f8f9fa",
                            padding: "8px"
                          }} 
                        />
                      }
                      title={
                        <div style={{ marginBottom: "0.5rem" }}>
                          <Link 
                            to={`/product/${item.id}`}
                            style={{ 
                              color: "#333", 
                              fontWeight: "600",
                              fontSize: "1.1rem"
                            }}
                          >
                            {item.title}
                          </Link>
                        </div>
                      }
                      description={
                        <div>
                          <Text type="secondary" style={{ display: "block", marginBottom: "0.5rem" }}>
                            Category: {item.category}
                          </Text>
                          <div style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "space-between",
                            marginTop: "1rem"
                          }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                              <Text>Quantity:</Text>
                              <InputNumber 
                                min={1} 
                                max={10} 
                                defaultValue={1} 
                                size="small"
                                style={{ width: "80px" }}
                              />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                              <Text strong style={{ fontSize: "1.2rem", color: "#ff6b35" }}>
                                {formatPrice(item.price)}
                              </Text>
                              <Button 
                                danger 
                                icon={<DeleteOutlined />}
                                onClick={() => handleRemove(item)}
                                size="small"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* Order Summary */}
          <Col xs={24} lg={8}>
            <Card title="Order Summary" style={{ position: "sticky", top: "2rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  marginBottom: "0.5rem" 
                }}>
                  <Text>Subtotal ({itemCount} items):</Text>
                  <Text>{formatPrice(total)}</Text>
                </div>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  marginBottom: "0.5rem" 
                }}>
                  <Text>Shipping:</Text>
                  <Text style={{ color: "#52c41a" }}>FREE</Text>
                </div>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  marginBottom: "0.5rem" 
                }}>
                  <Text>Tax:</Text>
                  <Text>{formatPrice(total * 0.08)}</Text>
                </div>
                <div style={{ 
                  borderTop: "1px solid #f0f0f0", 
                  paddingTop: "1rem",
                  marginTop: "1rem"
                }}>
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <Title level={4} style={{ margin: 0 }}>Total:</Title>
                    <Title level={3} style={{ margin: 0, color: "#ff6b35" }}>
                      {formatPrice(total + (total * 0.08))}
                    </Title>
                  </div>
                </div>
              </div>

              <Button 
                type="primary" 
                size="large" 
                block
                icon={<CreditCardOutlined />}
                onClick={handleCheckout}
                className="animated-button"
                style={{ 
                  height: "50px", 
                  fontSize: "1.1rem",
                  marginBottom: "1rem"
                }}
              >
                Proceed to Checkout
              </Button>

              <div style={{ 
                textAlign: "center", 
                padding: "1rem",
                background: "#f8f9fa",
                borderRadius: "8px",
                fontSize: "0.9rem"
              }}>
                <SafetyCertificateOutlined style={{ color: "#52c41a", marginRight: "0.5rem" }} />
                <Text type="secondary">Secure checkout with SSL encryption</Text>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Cart;
