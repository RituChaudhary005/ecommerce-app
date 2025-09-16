import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Input, Select, Dropdown, Menu } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

const Header = ({ cartCount, categories, onSearch, onCategoryChange }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    onSearch(value); // Send search term to Home page
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Login</Menu.Item>
      <Menu.Item key="2">Profile</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        background: "#ff7f50",
        color: "#fff",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
        E-Shop
      </Link>

      {/* Search bar */}
      <Search
        placeholder="Search products..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        style={{ maxWidth: 400, margin: "0 1rem", flex: 1 }}
        allowClear
      />

      {/* Category dropdown */}
      <Select
        placeholder="Select Category"
        style={{ width: 180, marginRight: "1rem" }}
        onChange={onCategoryChange}
        allowClear
      >
        <Option value="all">All Categories</Option>
        {categories && categories.map((cat) => (
          <Option key={cat} value={cat}>{cat}</Option>
        ))}
      </Select>

      {/* Cart Icon */}
      <Link to="/cart" style={{ color: "#fff", fontSize: "1.5rem", marginRight: "1rem" }}>
        <Badge count={cartCount}>
          <ShoppingCartOutlined />
        </Badge>
      </Link>

      {/* User dropdown */}
      <Dropdown overlay={menu} placement="bottomRight">
        <UserOutlined style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }} />
      </Dropdown>
      <Link to="/contact" style={{ color: "#fff", marginRight: "1rem" }}>
      Contact
      </Link>

    </div>
  );
};

export default Header;
