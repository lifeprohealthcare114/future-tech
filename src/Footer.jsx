import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#F9FAFB", // light gray background
        color: "#212529", // dark text
        paddingTop: "40px",
        paddingBottom: "20px",
        fontSize: "14px",
        borderTop: "1px solid #DEE2E6", // light border
        marginTop: "auto",
      }}
    >
      <Container>
        <Row className="mb-4">
          {/* Company Info */}
          <Col md={4} sm={12} className="mb-3">
            <h5
              style={{
                color: "#007BFF",
                marginBottom: "15px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              FutureTech Dynamics
            </h5>
            <p style={{ color: "#212529", lineHeight: 1.5 }}>
              O-15, Industrial Area, Yamuna Nagar-135001, Haryana, India <br />
              Plot No. 26/A &amp; 26/B, Gorwa Lake, Industrial Estate Road,
              Vadodara, Gujarat, 390016 <br />
              Phone: +91 91733 00247, +91 95371 95959 <br />
              Email:{" "}
              <a
                href="mailto:info@futuretechdynamics.in"
                style={{ color: "#007BFF", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                info@futuretechdynamics.in
              </a>{" "}
              <br />
              Website:{" "}
              <a
                href="https://www.futuretechdynamics.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007BFF", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                www.futuretechdynamics.in
              </a>
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6} xs={6} className="mb-3">
            <h6
              style={{
                color: "#007BFF",
                marginBottom: "15px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              Solutions
            </h6>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                { href: "/solutions/automotive", text: "Automotive Components" },
                { href: "/solutions/rf", text: "RF & Wireless Systems" },
                { href: "/solutions/adas", text: "ADAS & Smart Mobility" },
                { href: "/solutions/emerging", text: "Emerging Technology" },
              ].map(({ href, text }) => (
                <li key={href} style={{ marginBottom: "8px" }}>
                  <a
                    href={href}
                    style={{
                      color: "#212529",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                    onMouseLeave={(e) => (e.target.style.color = "#212529")}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={2} sm={6} xs={6} className="mb-3">
            <h6
              style={{
                color: "#007BFF",
                marginBottom: "15px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              Explore
            </h6>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                { href: "/about", text: "About Us" },
                { href: "/contact", text: "Contact Us" },
                { href: "/careers", text: "Careers" },
              ].map(({ href, text }) => (
                <li key={href} style={{ marginBottom: "8px" }}>
                  <a
                    href={href}
                    style={{
                      color: "#212529",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                    onMouseLeave={(e) => (e.target.style.color = "#212529")}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Social Media Icons */}
          <Col md={4} sm={12} className="mb-3">
            <h6
              style={{
                color: "#007BFF",
                marginBottom: "15px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              Follow Us
            </h6>
            <div style={{ display: "flex", gap: "20px", fontSize: "24px" }}>
              {[
                { href: "https://www.facebook.com/yourpage", Icon: Facebook, label: "Facebook" },
                { href: "https://twitter.com/yourprofile", Icon: Twitter, label: "Twitter" },
                { href: "https://instagram.com/yourprofile", Icon: Instagram, label: "Instagram" },
                { href: "https://linkedin.com/company/yourcompany", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/yourprofile", Icon: Github, label: "GitHub" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "#212529", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                  onMouseLeave={(e) => (e.target.style.color = "#212529")}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: "#DEE2E6" }} />
        <Row>
          <Col className="text-center" style={{ fontSize: "13px", color: "#6c757d" }}>
            © {new Date().getFullYear()} FutureTech Dynamics LLP. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
