import React, { useRef, useEffect } from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";

const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // gets triggered when near viewport
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.7, delay }}
      style={{ willChange: "transform, opacity", marginBottom: "3rem" }}
    >
      {children}
    </motion.div>
  );
};

const testingEquipmentsList = [
  "Environment Test Chamber: Temp. range -40ºC to 140ºC, Humidity: 30% to 90%±3%",
  "Humidity Chamber: Temp. range 0ºC to 85ºC, Humidity: Ambient to 99.99%",
  "CASS / Salt Spray Test Chamber: Temp. Range: 7º above ambient to 50ºC±1ºC, Humidity: 90% to 97%±3%",
  "Microporisity: Optical range 50X to 1000X",
  "Plating Thickness Tester: Working range 0.1 to 99.9 micron",
  "Step Testing Machine: Electroplating thickness 0.05 ~ 40 μm, Electro chem. Potential 145mV+/-10%",
  "Gloss Meter: Optical path: 20° / 60° / 85°",
  "Spectro Photo Meter: Measurement range: Ø 8 mm / Ø 11 mm, Measurement Interval: 3 sec.",
  "DFT Meter: Measurement Speed: > 60 reading per minute, Measurement range: 0-1000 micron",
  "Digital Torque Wrench: Range: 0 to 100 Nm , Least Count: 0.1 Nm",
  "Color Matching: Artificial day light, Fluorescent Tungsten filament, Triphosphorous Fluorescent (tl:84), Cool white Fluoresced, Ultra-violet black.",
  "Pull Out Force Tester: Range: 01 to 90 Kgf, Speed range: 20 to 300 mm/min",
  "Wheel Balancing Machine: For unbalance check up to 18” wheel rim.",
  "Melt Flow Index Tester: Temp range: 0 TO 300ºC",
  "IZOD / CHARPY Impact Tester: Capacity: 0~ 25 Joules",
  "Profile Projector: Range: Ø Dia 300 mm Max",
  "Other Measuring Instruments: Vernier Caliper, Micrometer, Height Gauge",
];

const CapabilitiesPage = () => {
  return (
    <Container fluid="md" className="py-5">
      {/* Testing Equipments */}
      <ScrollReveal>
        <h2
          className="display-5 fw-bold text-center mb-4"
          style={{ color: "#007BFF" }} // blue theme color
        >
          Testing Equipments
        </h2>
        <Row className="align-items-center gx-5">
          <Col md={6} className="mb-4">
            <Image
              src="/images/environment_chamber.jpg"
              alt="Environment Test Chamber"
              rounded
              fluid
              className="mb-4 shadow"
              style={{ boxShadow: "0 0 40px rgba(0, 123, 255, 0.3)" }}
            />
            <Image
              src="/images/plating_test_instruments.jpg"
              alt="Plating Test Instruments"
              rounded
              fluid
              className="shadow"
              style={{ boxShadow: "0 0 40px rgba(0, 123, 255, 0.3)" }}
            />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              {testingEquipmentsList.map((equipment, idx) => (
                <ListGroup.Item
                  key={idx}
                  className="border-0 ps-0 pe-0 fw-semibold fs-5 text-secondary"
                >
                  • {equipment}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </ScrollReveal>

      {/* Injection Molding Facilities */}
      <ScrollReveal delay={0.2}>
        <h2
          className="display-5 fw-bold text-center mb-4"
          style={{ color: "#007BFF" }}
        >
          Injection Molding Facilities
        </h2>
        <Row className="align-items-center gx-5">
          <Col md={6} className="mb-4">
            <Image
              src="/images/Injection Molding.png"
              alt="Injection Molding Machine"
              rounded
              fluid
              className="shadow"
              style={{ boxShadow: "0 0 40px rgba(0, 123, 255, 0.3)" }}
            />
          </Col>
          <Col md={6}>
            <p className="fs-5 text-muted mb-3">
              World-class fully automatic molding machines with robots to unload parts delicately. Molding capacity from 30 to 2400 tons, supporting Gas, Steam, and 2K capabilities.
            </p>
            <p className="fs-5 text-muted mb-3">
              Our 136 machines include pre-drying systems without human interface and automated plating lines (window size 1600 x 1000 x 350 mm).
            </p>
            <p className="fs-5 text-primary fw-semibold mb-3" style={{ color: "#007BFF" }}>
              Globally approved by major automakers including General Motors, Stellantis, Renault, Honda, and Toyota. Hexavalent & Trivalent coating capabilities in various finishes.
            </p>
            <p className="fs-5 text-muted">
              Supported by experienced teams and standardized window sizes to ensure quality and mitigate risks.
            </p>
          </Col>
        </Row>
      </ScrollReveal>

      {/* Facility & Manufacturing Capabilities */}
      <ScrollReveal delay={0.4}>
        <h2
          className="display-5 fw-bold text-center mb-4"
          style={{ color: "#007BFF" }}
        >
          Facility & Manufacturing Capabilities
        </h2>
        <Row className="align-items-center gx-5">
          <Col md={6} className="mb-4">
            <Image
              src="/images/Facility & Manufacturing.png"
              alt="Manufacturing Facility"
              rounded
              fluid
              className="mb-4 shadow"
              style={{ boxShadow: "0 0 40px rgba(0, 123, 255, 0.3)" }}
            />
            <Image
              src="/images/xray_inspection.jpg"
              alt="X-Ray Inspection"
              rounded
              fluid
              className="shadow"
              style={{ boxShadow: "0 0 40px rgba(0, 123, 255, 0.3)" }}
            />
          </Col>
          <Col md={6}>
            <p className="fs-5 text-muted mb-3">
              Our advanced manufacturing includes automated lathe machines, CNC & milling systems, X-Ray inspection, and sandblasting units. Expert in-house design and assembly teams ensure smooth development from concept to production.
            </p>
            <p className="fs-5 text-muted">
              With top tools and facilities, we drive innovation delivering precision engineering solutions for next-gen electronics and autonomous automotive technologies.
            </p>
          </Col>
        </Row>
      </ScrollReveal>
    </Container>
  );
};

export default CapabilitiesPage;
