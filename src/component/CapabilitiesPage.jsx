import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Accordion,
  Badge,
  Carousel,
} from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Lightweight icon library (install if needed)


const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, delay }}
      style={{ willChange: "transform, opacity", marginBottom: "4rem" }}
    >
      {children}
    </motion.div>
  );
};


// Equipment data with labels and short specs
const equipmentCards = [
  {
    icon: "🔬",
    title: "Environment Test Chamber",
    spec: "Temp. range -40ºC to 140ºC, Humidity: 30% to 90%±3%",
    fullDesc: "Highly precise temp & humidity control chamber for rigorous testing...",
  },
  {
    icon: "💧",
    title: "Humidity Chamber",
    spec: "Temp. range 0ºC to 85ºC, Humidity: Ambient to 99.99%",
    fullDesc: "Wide humidity and temperature range for durability assessments...",
  },
  {
    icon: "🧪",
    title: "Salt Spray Test Chamber",
    spec: "Temp range 7º above ambient to 50ºC±1ºC, Humidity: 90% to 97%±3%",
    fullDesc: "Corrosion resistance testing under harsh salt spray conditions...",
  },
  {
    icon: "🔍",
    title: "Microporisity Tester",
    spec: "Optical range 50X to 1000X",
    fullDesc: "Microscopic porosity inspection for materials precision.",
  },
];


// Full list for expandable content
const fullEquipmentList = [
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
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <Container fluid="md" className="py-5">
      {/* Hero / Intro Section */}
      <ScrollReveal>
        <h1 className="display-4 fw-bold text-center mb-3" style={{ color: "#007BFF" }}>
          Our Capabilities
        </h1>
        <p
          className="fs-5 text-center mx-auto mb-5"
          style={{ maxWidth: 700, color: "#555" }}
        >
          Cutting-edge facilities and advanced testing that ensure world-class quality for global automakers.
        </p>
      </ScrollReveal>

      {/* Testing Equipments */}
      <ScrollReveal delay={0.1}>
        <h2 className="display-6 fw-bold text-primary mb-4">Testing Equipments</h2>
        <Row xs={1} md={2} className="g-4 mb-3">
          {equipmentCards.map(({ icon, title, spec }, i) => (
            <Col key={i}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 8px 20px rgba(0,123,255,0.3)" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-3 border rounded h-100 d-flex align-items-start gap-3"
              >
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#007BFF",
                    minWidth: 50,
                    userSelect: "none",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <h5 className="mb-1">{title}</h5>
                  <small className="text-muted">{spec}</small>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        {/* Accordion for full list */}
        <Accordion activeKey={accordionOpen ? "0" : null}>
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => setAccordionOpen((v) => !v)}>
              View All Equipment <ChevronDown size={16} className="ms-2" />
            </Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush" as="ul" className="fs-6 text-secondary">
                {fullEquipmentList.map((item, idx) => (
                  <ListGroup.Item as="li" key={idx} className="border-0 ps-0">
                    • {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </ScrollReveal>

      {/* Injection Molding Facilities */}
      <ScrollReveal delay={0.3}>
        <h2 className="display-6 fw-bold text-primary mb-4">Injection Molding Facilities</h2>
        <Row className="align-items-center gx-5 gy-4">
          <Col md={6}>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 16px 30px rgba(0,123,255,0.3)" }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: 12, overflow: "hidden" }}
            >
              <Image
                src="/images/Injection Molding.png"
                alt="Injection Molding Machine"
                fluid
                rounded
              />
            </motion.div>
          </Col>
          <Col md={6} className="fs-5 text-muted">
            <ul className="list-unstyled mb-4" style={{ maxWidth: 480 }}>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Badge bg="primary" pill>✓</Badge> World-class fully automatic molding machines with precision robot unloading
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Badge bg="primary" pill>✓</Badge> Molding capacity ranging from 30 to 2400 tons
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Badge bg="primary" pill>✓</Badge> Gas, steam, and 2K molding capabilities
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Badge bg="primary" pill>✓</Badge> 136 fully automatic injection molding machines
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Badge bg="primary" pill>✓</Badge> Pre-drying systems and automatic plating lines with standardized window sizes
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Badge bg="primary" pill>✓</Badge> Approved by globally recognized automakers including General Motors, Stellantis, Renault, Honda, Toyota, and others
              </li>
              <li className="d-flex align-items-center gap-2">
                <Badge bg="primary" pill>✓</Badge> Hexavalent & Trivalent coatings available in bright, satin, and smoke finishes
              </li>
            </ul>
            <p className="fs-6 text-muted">
              Supported by a highly qualified and experienced workforce, ensuring standardized manufacturing processes that help mitigate risks effectively.
            </p>
          </Col>
        </Row>
        {/* Trusted by */}
        <div className="mt-4 d-flex justify-content-center align-items-center gap-4 flex-wrap">
          {["/logos/mg.png", "/logos/toyota.jpg", "/logos/honda.jpg"].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="Trusted automaker logo"
              style={{ maxHeight: 60, opacity: 0.8, transition: "opacity 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={e => (e.currentTarget.style.opacity = 0.8)}
              fluid
            />
          ))}
        </div>
      </ScrollReveal>

      {/* Facility & Manufacturing Capabilities */}
      <ScrollReveal delay={0.5}>
        <h2 className="display-6 fw-bold text-primary mb-4">Facility & Manufacturing Capabilities</h2>
        <Row className="gx-5 gy-4 align-items-center">
          <Col md={6}>
            <Carousel indicators={false} interval={4000} pause="hover" variant="dark" touch={true}>
              <Carousel.Item>
                <Image
                  src="/images/Facility & Manufacturing.png"
                  alt="Manufacturing Facility"
                  fluid
                  rounded
                  style={{ borderRadius: "16px", boxShadow: "0 0 40px rgba(0,123,255,0.25)" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/images/x-ray.png"
                  alt="X-Ray Inspection"
                  fluid
                  rounded
                  style={{ borderRadius: "16px", boxShadow: "0 0 40px rgba(0,123,255,0.25)" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center gap-4 fs-5 text-muted">
            <p>
              We lead with precision engineering and advanced in-house manufacturing capabilities including automated lathe machines,
              CNC milling systems, X-Ray inspection, and sandblasting units.
            </p>
            <p>
              Our expert in-house design and assembly teams ensure seamless development from concept to production, enabling faster innovation and high-quality solutions
              for next-gen electronics and autonomous automotive technologies.
            </p>
            <p>
              Equipped with state-of-the-art tools and facilities, we deliver precision-engineered solutions that enhance performance, safety, and efficiency in vehicles.
              From electric mobility to autonomous systems, we are driving the future of automotive innovation.
            </p>
            <div className="mt-3 p-4 bg-primary text-white rounded text-center fw-semibold fs-5">
              Delivering Precision Engineering for the Future of Mobility.
            </div>
          </Col>
        </Row>
      </ScrollReveal>

    </Container>
  );
};

export default CapabilitiesPage;
