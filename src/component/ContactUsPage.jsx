import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { PhoneFill, EnvelopeFill, GeoAltFill, ChatDots, X } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const maps = {
  yamunaNagar: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.226876621854!2d77.30023301506106!3d30.127673881838736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd0cdb3580e3%3A0xc9cb78767b4f41e7!2sYamuna%20Nagar!5e0!3m2!1sen!2sin!4v1678546880200!5m2!1sen!2sin",
  vadodara: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.317198917473!2d73.13496231498296!3d22.30715802834774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d2d1fc9f9b%3A0x613b2fbcfc26e4d!2sVadodara!5e0!3m2!1sen!2sin!4v1678546998471!5m2!1sen!2sin",
};

const phoneContacts = [
  { icon: <PhoneFill />, value: "+91 91733 00247" },
  { icon: <PhoneFill />, value: "+91 95371 95959" },
];

const emailContacts = [
  { icon: <EnvelopeFill />, value: "info@futuretechdynamics.in" },
];

const locations = [
  {
    icon: <GeoAltFill />,
    title: "Yamuna Nagar Office",
    address: "O-15, Industrial Area, Yamuna Nagar-135001, Haryana, India",
    mapUrl: maps.yamunaNagar,
  },
  {
    icon: <GeoAltFill />,
    title: "Vadodara Office",
    address: "Plot No. 26/A & 26/B, Gorwa Lake, Industrial Estate Road, Vadodara, Gujarat, 390016",
    mapUrl: maps.vadodara,
  },
];

const tooltip = (text) => <Tooltip id={`tooltip-${text}`}>{text}</Tooltip>;

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showChatbot, setShowChatbot] = useState(true);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center text-primary">Contact Us</h1>

      <Row className="mb-5 gx-5">
        {/* Locations & Contacts */}
        <Col md={6}>
          <h4 className="mb-3">Our Locations</h4>
          {locations.map(({ title, address, mapUrl, icon }) => (
            <div key={title} className="mb-4">
              <h5>
                <span className="text-primary me-2">{icon}</span>
                {title}
              </h5>
              <p>{address}</p>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 0 15px #0d6efd40",
                }}
              >
                <iframe
                  src={mapUrl}
                  title={title}
                  width="100%"
                  height="180"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          ))}

          <h4 className="mt-4 mb-3">Get in Touch</h4>
          {phoneContacts.map(({ icon, value }) => (
            <OverlayTrigger key={value} placement="top" overlay={tooltip("Call us")}>
              <p className="d-flex align-items-center text-primary" style={{ cursor: "pointer" }}>
                {icon} <span className="ms-2">{value}</span>
              </p>
            </OverlayTrigger>
          ))}
          {emailContacts.map(({ icon, value }) => (
            <OverlayTrigger key={value} placement="top" overlay={tooltip("Send us an email")}>
              <p className="d-flex align-items-center text-primary" style={{ cursor: "pointer" }}>
                {icon} <span className="ms-2">{value}</span>
              </p>
            </OverlayTrigger>
          ))}
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <h4 className="mb-3">Send Us a Message</h4>
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Floating className="mb-3">
              <Form.Control
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
              />
              <label htmlFor="name">Name</label>
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              <label htmlFor="email">Email</label>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                as="textarea"
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                style={{ height: "120px", resize: "none" }}
                isInvalid={!!errors.message}
              />
              <label htmlFor="message">Message</label>
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Floating>

            <motion.div whileTap={{ scale: 0.95 }} className="d-inline-block">
              <Button type="submit" variant="primary" disabled={submitted}>
                {submitted ? "Message Sent!" : "Submit"}
              </Button>
            </motion.div>
          </Form>
        </Col>
      </Row>

      {/* Draggable & Dismissible Chatbot */}
      {showChatbot && (
        <motion.div
          drag
          dragConstraints={{ top: 0, bottom: window.innerHeight - 60, left: 0, right: window.innerWidth - 60 }}
          initial={{ opacity: 0, bottom: -80 }}
          animate={{ opacity: 1, bottom: 30 }}
          exit={{ opacity: 0, bottom: -80 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={{
            position: "fixed",
            right: 30,
            bottom: 30,
            background: "linear-gradient(135deg, #007BFF, #00BFFF)",
            borderRadius: "50%",
            boxShadow: "0 0 20px #00BFFF",
            width: 60,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "grab",
            zIndex: 1000,
          }}
        >
          <div
            onClick={() => setShowChatbot(false)}
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              background: "#fff",
              borderRadius: "50%",
              width: 20,
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              boxShadow: "0 0 5px #0003",
            }}
          >
            <X size={12} color="#007BFF" />
          </div>
          <ChatDots size={32} color="white" />
        </motion.div>
      )}
    </Container>
  );
};

export default ContactUsPage;
