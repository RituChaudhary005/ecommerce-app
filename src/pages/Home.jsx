import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Typography, Statistic, Empty } from "antd";
import { getProducts, getCategories } from "../api/api";
import ProductCard from "../components/ProductCard";
import { ShoppingOutlined, TagsOutlined, StarOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Home = ({ search, category, setCategories }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products and categories
  useEffect(() => {
    Promise.all([getProducts(), getCategories()])
      .then(([prodRes, catRes]) => {
        setProducts(prodRes.data);
        setFilteredProducts(prodRes.data);
        const fetchedCategories = catRes.data;
        setCategories(fetchedCategories);
        // Pass categories to parent component
        if (setCategories) {
          setCategories(fetchedCategories);
        }
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

  if (loading) {
    return (
      <div className="custom-spinner">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <Title level={1} className="hero-title" style={{ color: "white", margin: 0 }}>
          Welcome to E-Shop
        </Title>
        <Paragraph className="hero-subtitle" style={{ color: "white", opacity: 0.9 }}>
          Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast, secure delivery.
        </Paragraph>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Stats Section */}
        <div className="stats-section">
          <Row gutter={[32, 16]}>
            <Col xs={24} sm={8}>
              <div className="stat-item">
                <Statistic
                  title="Total Products"
                  value={products.length}
                  prefix={<ShoppingOutlined />}
                  valueStyle={{ color: '#ff6b35' }}
                />
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="stat-item">
                <Statistic
                  title="Categories"
                  value={categories.length}
                  prefix={<TagsOutlined />}
                  valueStyle={{ color: '#ff6b35' }}
                />
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="stat-item">
                <Statistic
                  title="Showing"
                  value={filteredProducts.length}
                  prefix={<StarOutlined />}
                  valueStyle={{ color: '#ff6b35' }}
                />
              </div>
            </Col>
          </Row>
        </div>

        {/* Products Section */}
        <div className="products-grid">
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <Title level={2} style={{ marginBottom: "0.5rem" }}>
              {category === "all" ? "All Products" : `${category.charAt(0).toUpperCase() + category.slice(1)} Products`}
            </Title>
            {search && (
              <Paragraph style={{ color: "#666" }}>
                Search results for "{search}" ({filteredProducts.length} found)
              </Paragraph>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <Empty
                description={
                  <span>
                    {search ? `No products found for "${search}"` : "No products available"}
                  </span>
                }
                style={{ padding: "4rem 0" }}
              />
            </div>
          ) : (
            <Row gutter={[24, 24]}>
              {filteredProducts.map((product) => (
                <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
