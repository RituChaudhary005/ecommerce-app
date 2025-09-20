import React from "react";
import { Form, Input, Button, Typography, message, Row, Col, Card } from "antd";
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined
} from "@ant-design/icons";

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Data:", values);
    message.success("Thank you! Your message has been sent successfully. We'll get back to you soon!");
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <Title level={1}>Get in Touch</Title>
        <Paragraph style={{ fontSize: "1.1rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
          Have questions about our products or need assistance? We'd love to hear from you. 
          Send us a message and we'll respond as soon as possible.
        </Paragraph>
      </div>

      <Row gutter={[48, 32]}>
        {/* Contact Information */}
        <Col xs={24} lg={8}>
          <Card 
            title="Contact Information" 
            style={{ height: "100%", background: "linear-gradient(135deg, #ff6b35, #f7931e)" }}
            headStyle={{ color: "white", borderBottom: "1px solid rgba(255,255,255,0.2)" }}
            bodyStyle={{ color: "white" }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <MailOutlined style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
                <div>
                  <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>Email</div>
                  <div style={{ opacity: 0.9 }}>info@eshop.com</div>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <PhoneOutlined style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
                <div>
                  <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>Phone</div>
                  <div style={{ opacity: 0.9 }}>+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <EnvironmentOutlined style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
                <div>
                  <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>Address</div>
                  <div style={{ opacity: 0.9 }}>123 Shopping Street<br />New York, NY 10001</div>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center" }}>
                <ClockCircleOutlined style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
                <div>
                  <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>Business Hours</div>
                  <div style={{ opacity: 0.9 }}>
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat - Sun: 10:00 AM - 4:00 PM
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col xs={24} lg={16}>
          <Card title="Send us a Message" className="contact-form">
            <Form 
              form={form} 
              layout="vertical" 
              onFinish={onFinish}
              size="large"
            >
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[{ required: true, message: "Please enter your first name" }]}
                  >
                    <Input placeholder="John" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[{ required: true, message: "Please enter your last name" }]}
                  >
                    <Input placeholder="Doe" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter your email address" },
                  { type: "email", message: "Please enter a valid email address" },
                ]}
              >
                <Input placeholder="john.doe@example.com" prefix={<MailOutlined />} />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number (Optional)"
              >
                <Input placeholder="+1 (555) 123-4567" prefix={<PhoneOutlined />} />
              </Form.Item>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input placeholder="How can we help you?" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                  { min: 10, message: "Message must be at least 10 characters long" }
                ]}
              >
                <TextArea 
                  rows={6} 
                  placeholder="Tell us more about your inquiry..."
                  showCount
                  maxLength={500}
                />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large"
                  icon={<SendOutlined />}
                  className="animated-button"
                  style={{ 
                    height: "50px", 
                    fontSize: "1.1rem",
                    minWidth: "200px"
                  }}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* FAQ Section */}
      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <Title level={3}>Frequently Asked Questions</Title>
        <Row gutter={[24, 24]} style={{ marginTop: "2rem" }}>
          <Col xs={24} md={8}>
            <Card>
              <Title level={5}>How long does shipping take?</Title>
              <Text type="secondary">
                Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.
              </Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Title level={5}>What's your return policy?</Title>
              <Text type="secondary">
                We offer a 30-day return policy for all items in original condition with tags attached.
              </Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Title level={5}>Do you offer customer support?</Title>
              <Text type="secondary">
                Yes! Our customer support team is available Monday-Friday 9AM-6PM EST via phone, email, or chat.
              </Text>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
