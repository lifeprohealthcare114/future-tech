import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  CarFrontFill,
  ShieldFill,
  CloudUploadFill,
  PhoneFill,
} from "react-bootstrap-icons";

const industryData = [
  {
    id: "automotive",
    title: "Automotive",
    icon: CarFrontFill,
    color: "blue",
    description:
      "Advanced automotive components and systems for next-generation vehicles.",
    image: "/images/industries/Automotive.png",
    highlights: [
      "Shark Fin Antennas, ADAS (L3 & L4), Wireless CarPlay/Android Auto, Keyless Entry, TPMS.",
      "OEM car logos, dashboard UI with wireless connections, radar sensing overlays.",
      "Enhancing driver safety, comfort, and seamless infotainment integration.",
    ],
  },
  {
    id: "defense",
    title: "Defense & Aerospace",
    icon: ShieldFill,
    color: "green",
    description:
      "Mission-critical RF and communication systems for defense applications.",
    image: "/images/industries/defense.png", 
    highlights: [
      "High-frequency RADAR systems, telemetry communication, RF modules.",
      "Navy ships with RF overlays, ISRO-style spacecraft with signal beams, animated defense badges.",
      "Mission-critical reliability for navigation, communication, and surveillance.",
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture & Drones",
    icon: CloudUploadFill,
    color: "purple",
    description:
      "Smart farming solutions with drone technology and IoT integration.",
    image: "/images/industries/agriculture.png", 
    highlights: [
      "Wireless charging systems for drones, RF modules for remote monitoring, telemetry.",
      "Drone flight paths over farmland, wireless charging pads powering UAVs.",
      "Smarter farming with autonomous drones and reliable power/communication.",
    ],
  },
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    icon: PhoneFill,
    color: "orange",
    description:
      "Innovative wireless charging and IoT solutions for consumer devices.",
    image: "/images/industries/Electronics.png", // 👈 Your image
    highlights: [
      "Wireless charging (Qi standard), BLE/Wi-Fi connectivity modules, IoT integration.",
      "Smartphones on charging pads, smart IoT device network flows, glowing wireless energy lines.",
      "Powering the next generation of connected lifestyles with Made-in-India innovations.",
    ],
  },
];

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 4px 15px rgba(0,123,255,0.5)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const IndustriesServed = () => {
  const [activeIndustry, setActiveIndustry] = useState(industryData[0].id);
  const currentIndustry = industryData.find((ind) => ind.id === activeIndustry);

  return (
    <div
      style={{
        backgroundColor: "#F9FAFB",
        minHeight: "100vh",
        paddingTop: 60,
        paddingBottom: 80,
        color: "#212529",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{ color: "#007BFF", fontWeight: "700" }}
        >
          Industries Served
        </h2>
        <p
          className="text-center mb-5"
          style={{
            fontSize: 18,
            maxWidth: 700,
            margin: "0 auto",
            color: "#6c757d",
          }}
        >
          At Futuretech Dynamics, our technologies empower multiple industries
          with innovative, reliable, and Made-in-India solutions. From custom
          antennas to ADAS, wireless systems, and advanced electronics, we
          deliver next-gen connectivity and automation across sectors.
        </p>

        <Row className="g-4">
          <Col md={4}>
            {industryData.map(({ id, title, icon: Icon }) => (
              <motion.div
                key={id}
                variants={cardHoverVariants}
                whileHover="hover"
                onClick={() => setActiveIndustry(id)}
                style={{
                  border:
                    activeIndustry === id
                      ? "2px solid #007BFF"
                      : "1px solid #dee2e6",
                  borderRadius: 16,
                  padding: 20,
                  marginBottom: 20,
                  backgroundColor: activeIndustry === id ? "#e7f1ff" : "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  userSelect: "none",
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveIndustry(id);
                  }
                }}
              >
                <Icon size={36} color="#007BFF" />
                <h5
                  style={{
                    margin: 0,
                    color: activeIndustry === id ? "#007BFF" : "#212529",
                    fontWeight: activeIndustry === id ? "700" : "500",
                  }}
                >
                  {title}
                </h5>
              </motion.div>
            ))}
          </Col>

          <Col md={8}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  padding: 30,
                  boxShadow: "0 4px 15px rgba(0,123,255,0.2)",
                }}
              >
                <h3 style={{ color: "#007BFF", marginBottom: 20 }}>
                  {currentIndustry.title}
                </h3>
                <img
                  src={currentIndustry.image}
                  alt={currentIndustry.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 16,
                    marginBottom: 20,
                    boxShadow: "0 4px 20px rgba(0,123,255,0.15)",
                  }}
                />
                <p
                  style={{
                    fontSize: 18,
                    color: "#212529",
                    marginBottom: 20,
                  }}
                >
                  {currentIndustry.description}
                </p>
                <ul
                  style={{
                    fontSize: 16,
                    lineHeight: 1.6,
                    paddingLeft: 20,
                    color: "#212529",
                  }}
                >
                  {currentIndustry.highlights.map((hl, idx) => (
                    <li key={idx} style={{ marginBottom: 10 }}>
                      {hl}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </Col>
        </Row>

        <div
          style={{
            marginTop: 60,
            fontSize: 18,
            color: "#6c757d",
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Futuretech Dynamics combines RF engineering expertise, indigenous
          design, and scalable manufacturing to serve diverse industries. Our
          solutions are built for global standards, local reliability, and
          future readiness.
        </div>
      </Container>
    </div>
  );
};

export default IndustriesServed;
