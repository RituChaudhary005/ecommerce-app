import React from "react";
import { List, Button, Typography } from "antd";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography.Title level={2}>Shopping Cart</Typography.Title>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <List
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={item => (
              <List.Item
                actions={[
                  <Button danger onClick={() => removeFromCart(item.id)}>Remove</Button>
                ]}
              >
                <List.Item.Meta
                  title={item.title}
                  description={`$${item.price}`}
                  avatar={<img src={item.image} alt={item.title} style={{ width: 50, height: 50, objectFit: "contain" }} />}
                />
              </List.Item>
            )}
          />
          <Typography.Title level={3} style={{ marginTop: "1rem" }}>Total: ${total.toFixed(2)}</Typography.Title>
        </>
      )}
    </div>
  );
};

export default Cart;
