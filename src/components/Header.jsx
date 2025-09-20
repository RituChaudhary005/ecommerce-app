import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Input, Select, Dropdown, Menu, Button } from "antd";
import { 
  ShoppingCartOutlined, 
  UserOutlined, 
  SearchOutlined,
  MenuOutlined,
  HomeOutlined
} from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

const Header = ({ cartCount, categories, onSearch, onCategoryChange }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleSearch = (value) => {
    onSearch(value); // Send search term to Home page
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>Login</Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>Profile</Menu.Item>
      <Menu.Item key="3">Settings</Menu.Item>
      <Menu.Item key="4">Logout</Menu.Item>
    </Menu>
  );

  const mobileMenu = (
    <Menu>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">Cart ({cartCount})</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className="header-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          color: "#fff",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Logo */}
        <Link 
          to="/" 
          style={{ 
            color: "#fff", 
            fontSize: "1.8rem", 
            fontWeight: "bold",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          🛍️ E-Shop
        </Link>

        {/* Desktop Navigation */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "1rem",
            flex: 1,
            justifyContent: "center",
            maxWidth: "800px"
          }}
          className="desktop-nav"
        >
          {/* Search bar */}
          <Search
            placeholder="Search for products..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={handleSearch}
            style={{ maxWidth: 400, flex: 1 }}
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
          />

          {/* Category dropdown */}
          <Select
            placeholder="All Categories"
            style={{ width: 180 }}
            onChange={onCategoryChange}
            allowClear
            size="large"
          >
            <Option value="all">All Categories</Option>
            {categories && categories.map((cat) => (
              <Option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Option>
            ))}
          </Select>
        </div>

        {/* Right side actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Desktop Links */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <Link 
              to="/contact" 
              style={{ 
                color: "#fff", 
                textDecoration: "none",
                fontWeight: "500",
                transition: "opacity 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.8"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              Contact
            </Link>

            {/* Cart Icon */}
            <Link 
              to="/cart" 
              style={{ 
                color: "#fff", 
                fontSize: "1.5rem",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              <Badge count={cartCount} showZero>
                <ShoppingCartOutlined style={{ color: "#fff" }} />
              </Badge>
            </Link>

            {/* User dropdown */}
            <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
              <Button 
                type="text" 
                icon={<UserOutlined />} 
                style={{ 
                  color: "#fff", 
                  fontSize: "1.2rem",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px"
                }}
              />
            </Dropdown>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-nav" style={{ display: "none" }}>
            <Dropdown overlay={mobileMenu} placement="bottomRight" trigger={['click']}>
              <Button 
                type="text" 
                icon={<MenuOutlined />} 
                style={{ 
                  color: "#fff", 
                  fontSize: "1.2rem"
                }}
              />
            </Dropdown>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div 
        className="mobile-search" 
        style={{ 
          display: "none",
          padding: "0 2rem 1rem 2rem"
        }}
      >
        <Search
          placeholder="Search for products..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          allowClear
          enterButton={<SearchOutlined />}
        />
        <Select
          placeholder="All Categories"
          style={{ width: "100%", marginTop: "0.5rem" }}
          onChange={onCategoryChange}
          allowClear
        >
          <Option value="all">All Categories</Option>
          {categories && categories.map((cat) => (
            <Option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Option>
          ))}
        </Select>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: block !important;
          }
          .mobile-search {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
