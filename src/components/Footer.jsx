import React from 'react';
import { Row, Col, Typography } from 'antd';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={4} className="footer-title">E-Shop</Title>
              <Text style={{ color: '#bdc3c7' }}>
                Your one-stop destination for quality products at amazing prices. 
                We're committed to providing the best shopping experience.
              </Text>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <FacebookOutlined />
                </a>
                <a href="#" className="social-icon">
                  <TwitterOutlined />
                </a>
                <a href="#" className="social-icon">
                  <InstagramOutlined />
                </a>
                <a href="#" className="social-icon">
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} className="footer-title">Quick Links</Title>
              <a href="/" className="footer-link">Home</a>
              <a href="/products" className="footer-link">Products</a>
              <a href="/cart" className="footer-link">Shopping Cart</a>
              <a href="/contact" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">About Us</a>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} className="footer-title">Categories</Title>
              <a href="#" className="footer-link">Electronics</a>
              <a href="#" className="footer-link">Clothing</a>
              <a href="#" className="footer-link">Jewelry</a>
              <a href="#" className="footer-link">Men's Clothing</a>
              <a href="#" className="footer-link">Women's Clothing</a>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={5} className="footer-title">Contact Info</Title>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <MailOutlined style={{ marginRight: '8px', color: '#ff6b35' }} />
                <Text style={{ color: '#bdc3c7' }}>info@eshop.com</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <PhoneOutlined style={{ marginRight: '8px', color: '#ff6b35' }} />
                <Text style={{ color: '#bdc3c7' }}>+1 (555) 123-4567</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <EnvironmentOutlined style={{ marginRight: '8px', color: '#ff6b35' }} />
                <Text style={{ color: '#bdc3c7' }}>123 Shopping St, City, State 12345</Text>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <Text>© 2024 E-Shop. All rights reserved. | Privacy Policy | Terms of Service</Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;