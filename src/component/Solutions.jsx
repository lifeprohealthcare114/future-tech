import React from "react";
import { useParams } from "react-router-dom";
import { Container, Tab, Nav, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button"; // <-- import Button separately
import { motion } from "framer-motion";
import {
  Cpu,
  Wifi,
  Car,
  Zap,
  KeyRound,
  Radar,
  CheckCircle,
  Settings,
  Gauge,
  Shield,
  Layers,
  Wrench,
  BarChart,
  CpuIcon,
  Activity,
  MessageSquare,
} from "lucide-react";


const solutionData = {
  1: {
    title: "Shark Fin Antenna",
    img: "/images/shark_fin_antenna.jpg",
    color: "rgba(0,123,255,0.2)",
    brochure: "/brochures/Shark Fin Antenna Brochure.pdf",
    features: [
      { icon: <Wifi />, text: "Supports AM/FM, GPS & LTE" },
      { icon: <Cpu />, text: "Custom designs for any shape or size" },
      { icon: <Zap />, text: "Optimized performance with VSWR ≤ 1.5" },
      { icon: <Car />, text: "Seamless integration for automotive & aerospace" },
    ],
    description: `Futuretech Dynamics specializes in custom-designed Shark Fin Antennas, delivering sleek design and global standard compliance.`,
    specs: [
      { label: "AM/FM", value: "VSWR ≤ 1.4 | Gain ≥ 20.5 dB" },
      { label: "GPS", value: "VSWR ≤ 1.5 | Gain ≥ 33 dB" },
      { label: "LTE", value: "VSWR ≤ 1.5 (Typical)" },
    ],
    whyChooseUs: [
      "Fully tailored shapes and sizes",
      "Cutting-edge manufacturing",
      "Global standards compliance",
      "Rapid prototyping & testing",
      "Rigorous quality assurance",
      "Integration support for automotive & aerospace",
    ],
    technicalBreakdown: [
      "FM Section: FM Antenna + FM Amplifier",
      "GPS Section: GPS Antenna + GPS Amplifier",
      "LTE Section: LTE Antenna + LTE Matching Circuit",
    ],
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
    extra: {
      title: "ADAS L3 & L4 - Development and Customisation Services",
      description:
        "Futuretech Dynamics – Delivering innovative, custom solutions for your needs. Contact us today!",
      points: [
        {
          icon: <Radar style={{ color: "#007BFF" }} />,
          text: "In-House RADAR Development: Precision-designed for reliable detection and tracking.",
        },
        {
          icon: <Wifi style={{ color: "#007BFF" }} />,
          text: "Telemetry Ecosystem: Real-time V2V and V2I communication.",
        },
        {
          icon: <CpuIcon style={{ color: "#007BFF" }} />,
          text: "Custom Algorithms: Proprietary automation algorithms for decision-making and safety.",
        },
        {
          icon: <Layers style={{ color: "#007BFF" }} />,
          text: "Modular Design: Customizable, upgradable systems for seamless vehicle integration.",
        },
        {
          icon: <Activity style={{ color: "#007BFF" }} />,
          text: "Future-Ready: Scalable, sustainable, and adaptable to emerging technologies.",
        },
        {
          icon: <BarChart style={{ color: "#007BFF" }} />,
          text: "In-House Testing Lab: Comprehensive testing capabilities up to 110 GHz for system validation and optimization.",
        },
        {
          icon: <Wrench style={{ color: "#007BFF" }} />,
          text: "Custom ADAS Development: Tailored L3 & L4 automation solutions.",
        },
        {
          icon: <Radar style={{ color: "#007BFF" }} />,
          text: "In-House RADAR Design: High-performance RADAR system development.",
        },
        {
          icon: <Wifi style={{ color: "#007BFF" }} />,
          text: "Telemetry Systems: Robust V2V and V2I communication design.",
        },
        {
          icon: <CheckCircle style={{ color: "#007BFF" }} />,
          text: "Testing & Validation: In-house testing up to 110 GHz for reliability.",
        },
        {
          icon: <Settings style={{ color: "#007BFF" }} />,
          text: "Customizable Systems: Modular, upgradable solutions for diverse vehicles.",
        },
        {
          icon: <Car style={{ color: "#007BFF" }} />,
          text: "Retrofit Solutions: ADAS upgrades for existing cars.",
        },
        {
          icon: <MessageSquare style={{ color: "#007BFF" }} />,
          text: "Consulting & Support: Expert guidance and post-deployment support.",
        },
      ],
    },
  },
  3: {
    title: "Wireless Charging Solutions",
    img: "/images/wireless_charging.jpeg",
    color: "rgba(0,123,255,0.2)",
    brochure:
      "/brochures/Wireless Charging & BLE Wi-Fi Modems Brochure.pdf",
    features: [
      { icon: <Zap />, text: "Qi-certified wireless charging up to 15W" },
      { icon: <Wifi />, text: "BLE/Wi-Fi modems for CarPlay & Android Auto" },
      { icon: <Cpu />, text: "Compact, automotive-grade hardware" },
      { icon: <Car />, text: "Reliable EV & IoT charging systems" },
    ],
    description: `Next-gen wireless charging for automotive, heavy-duty vehicles, and drones.`,
    extra: {
      title: "BLE/Wi-Fi Modems for Wireless CarPlay & Android Auto",
      img: "/images/wireless_carplay.png",
      points: [
        {
          icon: <Car style={{ color: "#007BFF" }} />,
          text: "Purpose: Enables Wireless Apple CarPlay and Android Auto integration in vehicles.",
        },
        {
          icon: <Wifi style={{ color: "#007BFF" }} />,
          text: "Connectivity: Uses Bluetooth Low Energy (BLE) for initial pairing and Wi-Fi (2.4 GHz/5 GHz) for high-speed data transfer.",
        },
        {
          icon: <Cpu style={{ color: "#007BFF" }} />,
          text: "Functionality: Supports seamless transmission of navigation, media, and voice control between smartphone and infotainment system.",
        },
        {
          icon: <Settings style={{ color: "#007BFF" }} />,
          text: "Design: Compact, automotive-grade modem designed for OEM compatibility and integration with vehicle ECUs.",
        },
        {
          icon: <CheckCircle style={{ color: "#007BFF" }} />,
          text: "Customization: RFME can tailor BLE/Wi-Fi interface solutions to suit various car platforms and infotainment systems.",
        },
      ],
    },
  },
  4: {
    title: "Keyless Entry System",
    img: "/images/keyless.png",
    color: "rgba(0,123,255,0.2)",
    brochure:
      "/brochures/Keyless Entry System & Tyre Pressure Monitoring Brochure.pdf",
    features: [
      { icon: <KeyRound />, text: "Passive entry & push-button start" },
      { icon: <Cpu />, text: "Secure RF transceivers with encryption" },
      { icon: <Car />, text: "Seamless integration with ECUs or standalone" },
      { icon: <Zap />, text: "Indigenously developed – Made in India" },
    ],
    description: `Secure and convenient keyless entry solutions with rolling code encryption.`,
    extra: {
      title: "Tyre Pressure Monitoring System (TPMS)",
      img: "/images/tyre_pressure_monitoring.png",
      points: [
        {
          icon: <Gauge style={{ color: "#007BFF" }} />,
          text: "Purpose: Monitors real-time tyre pressure and temperature to enhance safety, fuel efficiency and tyre life.",
        },
        {
          icon: <Wifi style={{ color: "#007BFF" }} />,
          text: "Technology: Wireless one-way RF transmitters in each tyre send pressure data to a central vehicle receiver.",
        },
        {
          icon: <Cpu style={{ color: "#007BFF" }} />,
          text: "Types: Supports both direct TPMS (sensor inside tyre) and indirect TPMS (using ABS/ECU data).",
        },
        {
          icon: <Settings style={{ color: "#007BFF" }} />,
          text: "Integration: Designed to work with existing vehicle ECUs or as an independent display module.",
        },
        {
          icon: <Shield style={{ color: "#007BFF" }} />,
          text: "Reliability: Built to automotive-grade standards with rugged RF hardware for long-term use in harsh conditions.",
        },
        {
          icon: <CheckCircle style={{ color: "#007BFF" }} />,
          text: "Uniqueness: Made in India, an indigenous alternative for OEMs and aftermarket use.",
        },
      ],
    },
  },
};

const Solutions = () => {
  const { id } = useParams();
  const defaultKey = id && solutionData[id] ? id : "1";

  return (
    <Container style={{ padding: "60px 20px", maxWidth: 1100 }}>
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#007BFF" }}>
        Our Solutions
      </h2>

      <Tab.Container defaultActiveKey={defaultKey}>
        <Nav variant="tabs" justify className="mb-4 flex-wrap">
          {Object.entries(solutionData).map(([key, sol]) => (
            <Nav.Item key={key}>
              <Nav.Link eventKey={key} style={{ color: "#007BFF" }}>
                {sol.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {Object.entries(solutionData).map(([key, sol]) => (
            <Tab.Pane eventKey={key} key={key}>
              <Row className="align-items-center">
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

                <Col md={6}>
                  <h3 className="fw-bold mb-3" style={{ color: "#212529" }}>
                    {sol.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      color: "#444",
                    }}
                  >
                    {sol.description}
                  </p>
                  <ul className="list-unstyled">
                    {sol.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="d-flex align-items-center mb-2"
                        style={{ color: "#212529" }}
                      >
                        <span style={{ color: "#007BFF", marginRight: 10 }}>
                          {f.icon}
                        </span>
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={sol.brochure}
                    download
                    variant="primary"
                    className="mt-3"
                    style={{ borderRadius: "6px" }}
                  >
                    Download Brochure
                  </Button>
                </Col>
              </Row>

              {/* Additional sections for solutions */}
              {key === "1" && (
                <>
                  <h4 className="fw-bold mt-5 mb-3" style={{ color: "#007BFF" }}>
                    Key Performance Metrics
                  </h4>
                  <Row>
                    {sol.specs.map((s, i) => (
                      <Col md={4} key={i} className="mb-3">
                        <Card className="shadow-sm h-100">
                          <Card.Body className="text-center">
                            <h6 className="fw-bold">{s.label}</h6>
                            <p className="mb-0" style={{ color: "#555" }}>
                              {s.value}
                            </p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>

                  <h4 className="fw-bold mt-5 mb-3" style={{ color: "#007BFF" }}>
                    Why Choose Us?
                  </h4>
                  <Row>
                    {sol.whyChooseUs.map((point, i) => (
                      <Col md={6} key={i} className="mb-2 d-flex">
                        <CheckCircle
                          style={{ color: "#007BFF", marginRight: 10 }}
                        />
                        <span>{point}</span>
                      </Col>
                    ))}
                  </Row>

                  <h4 className="fw-bold mt-5 mb-3" style={{ color: "#007BFF" }}>
                    Technical Breakdown
                  </h4>
                  <ul style={{ color: "#333" }}>
                    {sol.technicalBreakdown.map((t, i) => (
                      <li key={i} className="mb-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {key === "2" && sol.extra && (
                <Row className="mt-5">
                  <Col>
                    <h4 className="fw-bold mb-3" style={{ color: "#007BFF" }}>
                      {sol.extra.title}
                    </h4>
                    <p style={{ color: "#444" }}>{sol.extra.description}</p>
                    <ul className="list-unstyled" style={{ color: "#333" }}>
                      {sol.extra.points.map((p, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-3"
                          style={{ fontSize: "15px" }}
                        >
                          <span style={{ marginRight: 10, flexShrink: 0 }}>
                            {p.icon}
                          </span>
                          <span>{p.text}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              )}

              {key === "3" && sol.extra && (
                <Row className="mt-5 align-items-center">
                  <Col md={6}>
                    <h4 className="fw-bold mb-3" style={{ color: "#007BFF" }}>
                      {sol.extra.title}
                    </h4>
                    <ul className="list-unstyled" style={{ color: "#333" }}>
                      {sol.extra.points.map((p, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-3"
                          style={{ fontSize: "15px" }}
                        >
                          <span style={{ marginRight: 10, flexShrink: 0 }}>
                            {p.icon}
                          </span>
                          <span>{p.text}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src={sol.extra.img}
                      alt={sol.extra.title}
                      style={{
                        maxWidth: "90%",
                        borderRadius: 20,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                  </Col>
                </Row>
              )}

              {key === "4" && sol.extra && (
                <Row className="mt-5 align-items-center">
                  <Col md={6}>
                    <h4 className="fw-bold mb-3" style={{ color: "#007BFF" }}>
                      {sol.extra.title}
                    </h4>
                    <ul className="list-unstyled" style={{ color: "#333" }}>
                      {sol.extra.points.map((p, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start mb-3"
                          style={{ fontSize: "15px" }}
                        >
                          <span style={{ marginRight: 10, flexShrink: 0 }}>
                            {p.icon}
                          </span>
                          <span>{p.text}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src={sol.extra.img}
                      alt={sol.extra.title}
                      style={{
                        maxWidth: "90%",
                        borderRadius: 20,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                  </Col>
                </Row>
              )}
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Solutions;
