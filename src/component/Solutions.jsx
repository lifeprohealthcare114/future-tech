import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Tab, Nav, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Cpu, Wifi, Car, Zap, KeyRound, Radar } from "lucide-react";

const solutionData = {
  1: {
    title: "Shark Fin Antenna",
    img: "/images/shark_fin_antenna.jpg",
    color: "rgba(0,123,255,0.2)", // Bootstrap primary semi-transparent
    brochure: "/brochures/Shark Fin Antenna Brochure.pdf",
    features: [
      { icon: <Wifi />, text: "Supports AM/FM, GPS & LTE" },
      { icon: <Cpu />, text: "Custom designs for any shape or size" },
      { icon: <Zap />, text: "Optimized performance with VSWR ≤ 1.5" },
      { icon: <Car />, text: "Seamless integration for automotive & aerospace" },
    ],
    description: `Futuretech Dynamics specializes in custom-designed Shark Fin Antennas, delivering sleek design and global standard compliance.`,
  },
  2: {
    title: "Advanced Driving Assistance System (L3 & L4)",
    img: "/images/adas_system.jpeg",
    color: "rgba(0,123,255,0.2)",
    brochure: "/brochures/ADAS L3 & L4 Brochure.pdf",
    features: [
      { icon: <Radar />, text: "In-house RADAR development up to 110 GHz" },
      { icon: <Car />, text: "Level 3 & 4 automation capabilities" },
      { icon: <Cpu />, text: "Custom AI algorithms for decision-making" },
      { icon: <Wifi />, text: "Telemetry ecosystem (V2V & V2I communication)" },
    ],
    description: `Cutting-edge ADAS solutions with radar, lidar, telemetry, and retrofit support.`,
  },
  3: {
    title: "Wireless Charging Solutions",
    img: "/images/wireless_charging.jpeg",
    color: "rgba(0,123,255,0.2)",
    brochure: "/brochures/Wireless Charging & BLE Wi-Fi Modems Brochure.pdf",
    features: [
      { icon: <Zap />, text: "Qi-certified wireless charging up to 15W" },
      { icon: <Wifi />, text: "BLE/Wi-Fi modems for CarPlay & Android Auto" },
      { icon: <Cpu />, text: "Compact, automotive-grade hardware" },
      { icon: <Car />, text: "Reliable EV & IoT charging systems" },
    ],
    description: `Next-gen wireless charging for automotive, heavy-duty vehicles, and drones.`,
  },
  4: {
    title: "Keyless Entry System",
    img: "/images/keyless.png",
    color: "rgba(0,123,255,0.2)",
    brochure: "/brochures/Keyless Entry System & Tyre Pressure Monitoring Brochure.pdf",
    features: [
      { icon: <KeyRound />, text: "Passive entry & push-button start" },
      { icon: <Cpu />, text: "Secure RF transceivers with encryption" },
      { icon: <Car />, text: "Seamless integration with ECUs or standalone" },
      { icon: <Zap />, text: "Indigenously developed – Made in India" },
    ],
    description: `Secure and convenient keyless entry solutions with rolling code encryption.`,
  },
};

const Solutions = () => {
  const { id } = useParams();
  const defaultKey = id && solutionData[id] ? id : "1";

  return (
    <Container style={{ padding: "60px 20px", maxWidth: 960 }}>
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#007BFF" }}>
        Our Solutions
      </h2>

      <Tab.Container defaultActiveKey={defaultKey}>
        {/* Tabs Navigation */}
        <Nav variant="tabs" justify className="mb-4 flex-wrap">
          {Object.entries(solutionData).map(([key, sol]) => (
            <Nav.Item key={key}>
              <Nav.Link eventKey={key} style={{ color: "#007BFF" }}>
                {sol.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Tab Content */}
        <Tab.Content>
          {Object.entries(solutionData).map(([key, sol]) => (
            <Tab.Pane eventKey={key} key={key}>
              <Row className="align-items-center">
                {/* Image with background animation */}
                <Col md={6} className="mb-4 text-center position-relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "clamp(150px, 60vw, 350px)",
                      height: "clamp(150px, 60vw, 350px)",
                      borderRadius: "50%",
                      background: sol.color,
                      transform: "translate(-50%, -50%)",
                      zIndex: 0,
                    }}
                  />
                  <img
                    src={sol.img}
                    alt={sol.title}
                    style={{
                      maxWidth: "90%",
                      borderRadius: 20,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </Col>

                {/* Text & Features */}
                <Col md={6}>
                  <h3 className="fw-bold mb-3" style={{ color: "#212529" }}>
                    {sol.title}
                  </h3>
                  <p style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "#444" }}>
                    {sol.description}
                  </p>
                  <ul className="list-unstyled">
                    {sol.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="d-flex align-items-center mb-2"
                        style={{ color: "#212529" }}
                      >
                        <span style={{ color: "#007BFF", marginRight: 10 }}>{f.icon}</span>
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Download Brochure Button */}
                  <a
                    href={sol.brochure}
                    download
                    className="btn btn-primary mt-3"
                    style={{ borderRadius: "6px" }}
                  >
                    Download Brochure
                  </a>
                </Col>
              </Row>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>

      {/* Back Button */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Link to="/">
          <Button variant="outline-primary" size="lg">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Solutions;
