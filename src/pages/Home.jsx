import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Input, Select, Typography } from "antd";
import { getProducts, getCategories } from "../api/api";
import ProductCard from "../components/ProductCard";

const { Option } = Select;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Fetch products and categories
  useEffect(() => {
    Promise.all([getProducts(), getCategories()])
      .then(([prodRes, catRes]) => {
        setProducts(prodRes.data);
        setFilteredProducts(prodRes.data);
        setCategories(catRes.data);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter products whenever search or category changes
  useEffect(() => {
    let filtered = products;

    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [search, category, products]);

  if (loading) return <Spin size="large" style={{ display: "block", margin: "2rem auto" }} />;

  return (
    <div style={{ padding: "2rem" }}>
      <Typography.Title level={2}>Products</Typography.Title>

      {/* Filters */}
      <Row gutter={[16, 16]} style={{ marginBottom: "1rem" }}>
        <Col xs={24} sm={12}>
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
          />
        </Col>
        <Col xs={24} sm={12}>
          <Select
            value={category}
            onChange={(value) => setCategory(value)}
            style={{ width: "100%" }}
          >
            <Option value="all">All Categories</Option>
            {categories.map((cat) => (
              <Option key={cat} value={cat}>{cat}</Option>
            ))}
          </Select>
        </Col>
      </Row>

      {/* Product Grid */}
      <Row gutter={[16, 16]}>
        {filteredProducts.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
