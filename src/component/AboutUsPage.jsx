import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cpu, Zap, Antenna, Wifi } from "lucide-react";
import { motion } from "framer-motion";

// Subtle animated background overlay for hero section
const AnimatedHeroBackground = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.15 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at center, #007bff 0%, transparent 80%),
        repeating-linear-gradient(45deg, #007BFF 0, #0056b3 1px, transparent 2px, transparent 10px)
      `,
      zIndex: -1,
      pointerEvents: "none",
    }}
  />
);

const iconStyle = { color: "#007BFF", marginRight: 12, minWidth: 28 };

const cardVariants = {
  hover: {
    scale: 1.06,
    boxShadow: "0 0 15px #007BFF",
    transition: { duration: 0.4 },
  },
};

const AboutUsPage = () => {
  return (
    <div style={{ position: "relative", overflowX: "hidden", paddingBottom: 80 }}>
      {/* Hero Banner */}
      <section
        style={{
          position: "relative",
          height: 320,
          backgroundColor: "#f8f9fa",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          marginBottom: 60,
        }}
      >
        <AnimatedHeroBackground />
        <h1
          style={{
            position: "relative",
            fontWeight: "900",
            fontSize: "3rem",
            color: "#007BFF",
            textShadow: "0 0 14px rgba(0,123,255,0.35)",
            textAlign: "center",
            padding: "0 1rem",
            maxWidth: "95vw",
          }}
        >
          Empowering the Future of Mobility
        </h1>
      </section>

      <Container>
        {/* Facility Image for visualization */}
        <img
          src="/images/futuretech.png"
          alt="FutureTech Dynamics Facility Overview"
          style={{
            width: "100%",
            maxHeight: 350,
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 8px 24px rgba(0, 123, 255, 0.3)",
            marginBottom: "2rem",
          }}
        />

        {/* Our Story */}
        <section className="mb-5">
          <h2 className="text-primary fw-bold mb-4">🌍 Our Story</h2>
          <p style={{ fontSize: 18, color: "#212529", maxWidth: 900 }}>
            Leveraging the deep design and manufacturing legacy of PIPL (since 1967 in automotive plastics) and the RF & electronics expertise of RFME (since 2017), we have emerged as FutureTech Dynamics — a cutting-edge division focused on enabling the future of mobility. 
            At the intersection of technology and automotive evolution, we deliver advanced solutions in:
          </p>

          <ul style={{ fontSize: 17, color: "#212529", maxWidth: 600, listStyle: "none", paddingLeft: 0 }}>
            <li><Cpu style={iconStyle} />Smart Electronics – wireless charging, infotainment, telematics.</li>
            <li><Antenna style={iconStyle} />Connectivity – antennas, RF systems, V2X communication.</li>
            <li><Zap style={iconStyle} />Mechatronic Systems – ADAS, sensors, automation modules.</li>
          </ul>

          <p style={{ fontSize: 18, color: "#212529", maxWidth: 900 }}>
            With a Made-in-India foundation and global partnerships, we cater to the fast-evolving needs of automotive, EV, defense, aerospace, agriculture, and consumer industries.
          </p>
        </section>

        {/* Vision & Mission */}
        <section
          className="mb-5 p-4 rounded"
          style={{
            position: "relative",
            background: "rgba(0,123,255,0.05)",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: "repeating-radial-gradient(circle, #007BFF10 0, #007BFF05 10px)",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="text-primary fw-bold mb-4">🚀 Vision & Mission</h2>
            <h5 className="fw-semibold text-primary">Our Vision</h5>
            <p style={{ maxWidth: 700, fontSize: 16, color: "#212529" }}>
              “To drive the future of connected mobility with innovative, indigenous, and globally trusted solutions in electronics, connectivity, and automation.”
            </p>
            <h5 className="fw-semibold text-primary mt-4">Our Mission</h5>
            <ul style={{ fontSize: 16, color: "#212529" }}>
              <li>Harness design & engineering excellence to deliver world-class smart mobility solutions.</li>
              <li>Pioneer Made-in-India technologies that replace imports and empower OEMs.</li>
              <li>Build sustainable, scalable, and future-ready systems for automotive, defense, and beyond.</li>
              <li>Partner with global leaders and local innovators to shape the mobility revolution.</li>
            </ul>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="mb-5">
          <h2 className="text-primary fw-bold mb-4">🏭 Our Expertise</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-4 rounded border border-primary"
                style={{ cursor: "default", backgroundColor: "#e7f1ff" }}
              >
                <h5>
                  <Cpu style={iconStyle} />
                  Legacy in Manufacturing
                </h5>
                <p>Over 50 years in automotive plastics & components.</p>
              </motion.div>
            </Col>
            <Col md={6} lg={3}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-4 rounded border border-primary"
                style={{ cursor: "default", backgroundColor: "#e7f1ff" }}
              >
                <h5>
                  <Antenna style={iconStyle} />
                  Advanced RF Systems
                </h5>
                <p>Antennas, radar, telemetry, and wireless modules.</p>
              </motion.div>
            </Col>
            <Col md={6} lg={3}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-4 rounded border border-primary"
                style={{ cursor: "default", backgroundColor: "#e7f1ff" }}
              >
                <h5>
                  <Wifi style={iconStyle} />
                  Smart Mobility Solutions
                </h5>
                <p>ADAS, telematics, IoT integration, EV-ready tech.</p>
              </motion.div>
            </Col>
            <Col md={6} lg={3}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-4 rounded border border-primary"
                style={{ cursor: "default", backgroundColor: "#e7f1ff" }}
              >
                <h5>
                  <Zap style={iconStyle} />
                  Innovation DNA
                </h5>
                <p>In-house R&D centers, testing labs (up to 110 GHz), global certifications.</p>
              </motion.div>
            </Col>
          </Row>
        </section>

        {/* Global Footprint */}
        <section className="mb-5">
          <h2 className="text-primary fw-bold mb-4">🌐 Global Footprint</h2>
          <p style={{ maxWidth: 880, fontSize: 18, color: "#212529" }}>
            Headquartered in India (Vadodara &amp; Yamuna Nagar) with facilities across the country, and offices in Detroit, Munich, and São Paulo, FutureTech Dynamics is strategically positioned to serve OEMs and Tier-1s worldwide.
          </p>
        </section>

        {/* Closing Statement */}
        <section className="text-center pt-5 pb-3" style={{ maxWidth: 760, margin: "0 auto" }}>
          <h4>✨ Shaping the Future of Mobility</h4>
          <p style={{ color: "#212529", fontSize: 18 }}>
            At FutureTech Dynamics, we believe the future of mobility is smarter, safer, and seamlessly connected. With our legacy of excellence and spirit of innovation, we are proud to shape that future today.
          </p>
        </section>
      </Container>
    </div>
  );
};

export default AboutUsPage;
