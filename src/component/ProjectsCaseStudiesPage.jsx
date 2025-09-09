import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
} from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for VSWR and Gain charts
const vswrData = [
  { frequency: 1, VSWR: 1.5 },
  { frequency: 2, VSWR: 1.3 },
  { frequency: 3, VSWR: 1.1 },
  { frequency: 4, VSWR: 1.2 },
  { frequency: 5, VSWR: 1.0 },
];

const gainData = [
  { frequency: 1, GainBefore: 3, GainAfter: 8 },
  { frequency: 2, GainBefore: 3, GainAfter: 9 },
  { frequency: 3, GainBefore: 4, GainAfter: 10 },
  { frequency: 4, GainBefore: 4, GainAfter: 11 },
  { frequency: 5, GainBefore: 3, GainAfter: 11 },
];

const caseStudies = [
  {
    id: 1,
    title: "Shark Fin Antenna",
    image: "/images/shark_fin_antenna.jpg",
    summary:
      "Innovative automotive antenna design with optimized VSWR and gain.",
    details:
      "Designed a shark fin antenna with exceptionally low VSWR for improved signal quality. Gain boosted substantially using advanced materials and geometry.",
  },
  {
    id: 2,
    title: "Advanced ADAS System",
    image: "/images/adas_system.jpeg",
    summary:
      "Level 3 & 4 advanced driver assist system integrating radar and cameras.",
    details:
      "CAD and simulation optimizations allowed best-in-class automation capability for diverse driving scenarios.",
  },
];

const ProjectsCaseStudiesPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activeCase, setActiveCase] = useState(null);

  const openModal = (caseStudy) => {
    setActiveCase(caseStudy);
    setModalShow(true);
  };

  const closeModal = () => {
    setActiveCase(null);
    setModalShow(false);
  };

  return (
    <Container className="py-5">
      {/* Featured Case Study Banner */}
      <section className="mb-5">
        <h1 className="text-center fw-bold mb-4 text-primary">
          Featured Case Study: Shark Fin Antenna
        </h1>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <img
              src="/images/shark_fin_antenna1.png"
              alt="Shark Fin Antenna"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
          <Col md={6}>
            <p className="text-secondary mb-4" style={{ fontSize: "1.1rem" }}>
              Innovative design focusing on optimizing Voltage Standing Wave
              Ratio (VSWR) and gain performance for automotive communication.
            </p>

            {/* VSWR Chart */}
            <h5 className="fw-semibold mb-2">VSWR Chart</h5>
            <div className="bg-light rounded p-3 shadow-sm mb-4">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  data={vswrData}
                  margin={{ top: 10, bottom: 5, left: -8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="frequency"
                    label={{
                      value: "Frequency (GHz)",
                      position: "insideBottomRight",
                      offset: -2,
                    }}
                  />
                  <YAxis domain={[0.9, 2]} />
                  <RechartsTooltip />
                  <Line
                    type="monotone"
                    dataKey="VSWR"
                    stroke="#007BFF"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Gain Chart */}
            <h5 className="fw-semibold mb-2">Gain Chart</h5>
            <div className="bg-light rounded p-3 shadow-sm">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  data={gainData}
                  margin={{ top: 10, bottom: 5, left: -8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="frequency"
                    label={{
                      value: "Frequency (GHz)",
                      position: "insideBottomRight",
                      offset: -2,
                    }}
                  />
                  <YAxis />
                  <RechartsTooltip />
                  <Line
                    type="monotone"
                    dataKey="GainBefore"
                    stroke="#8884d8"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    name="Before"
                  />
                  <Line
                    type="monotone"
                    dataKey="GainAfter"
                    stroke="#00BFFF"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    name="After"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Col>
        </Row>
      </section>

      {/* Case Studies Grid */}
      <section>
        <h2 className="mb-5 text-primary fw-bold text-center">
          More Case Studies
        </h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {caseStudies.map((caseStudy) => (
            <Col key={caseStudy.id}>
              <Card
                className="h-100 border-0 shadow-sm hover-shadow transition cursor-pointer"
                onClick={() => openModal(caseStudy)}
              >
                <Card.Img
                  variant="top"
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="rounded-top"
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">
                    {caseStudy.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {caseStudy.summary}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Detailed Modal */}
      <Modal
        show={modalShow}
        onHide={closeModal}
        size="lg"
        centered
        className="case-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{activeCase?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={activeCase?.image}
            alt={activeCase?.title}
            className="img-fluid rounded shadow-sm mb-4"
          />
          <p className="text-secondary" style={{ fontSize: "1.05rem" }}>
            {activeCase?.details}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProjectsCaseStudiesPage;
