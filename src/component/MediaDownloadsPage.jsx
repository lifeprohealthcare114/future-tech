import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Image,
  Tab,
  Nav,
  Modal,
} from "react-bootstrap";
import { FileText, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const featuredDownloads = [
  {
    id: 1,
    title: "Corporate Brochure",
    description:
      "Overview of Futuretech Dynamics solutions, capabilities, and industries served.",
    pdf: "/downloads/corporate_brochure.pdf",
    glowColor: "rgba(0,123,255,0.75)",
  },
  {
    id: 2,
    title: "Capability Deck (PIPL Future Tech Dynamics)",
    description:
      "In-depth look at our design, manufacturing, and RF/electronics expertise.",
    pdf: "/downloads/capability_deck.pdf",
    glowColor: "rgba(0,123,255,0.75)",
  },
  {
    id: 3,
    title: "Product Portfolio – Exterior & Interior Components",
    description:
      "Showcasing grilles, emblems, garnishes, fog lamps, trims, and more for leading OEMs.",
    pdf: "/downloads/product_portfolio.pdf",
    glowColor: "rgba(0,123,255,0.75)",
  },
  {
    id: 4,
    title: "Wireless & ADAS Solutions",
    description:
      "Details on Shark Fin Antennas, Wireless Charging, Keyless Entry, TPMS, ADAS modules.",
    pdf: "/brochures/Futuretech Dynamics Brochure.pdf",
    glowColor: "rgba(0,123,255,0.75)",
  },
];

const newsUpdates = [
  {
    id: 1,
    date: "Aug 20, 2025",
    title: "New partnerships with leading OEMs and Tier-1 suppliers.",
    link: "https://www.linkedin.com/posts/futuretechdynamics_new-partnerships-activity-123456789/",
  },
  {
    id: 2,
    date: "Jul 15, 2025",
    title: "Expansion of manufacturing facilities across India.",
    link: "https://futuretechdynamics.in/news/manufacturing-expansion",
  },
  {
    id: 3,
    date: "Jun 10, 2025",
    title: "Participation in upcoming Auto Expo / Aero India / AgriTech events.",
    link: "https://futuretechdynamics.in/events/auto-expo-2025",
  },
  {
    id: 4,
    date: "May 05, 2025",
    title: "Launch of next-gen Qi-certified wireless charging systems.",
    link: "https://futuretechdynamics.in/news/qi-certified-charging",
  },
];

const mediaGallery = {
  logos: [
    { alt: "OEM Logo 1", src: "/logos/mg.png" },
    { alt: "OEM Logo 2", src: "/logos/toyota.jpg" },
    { alt: "OEM Badge 1", src: "/logos/honda.jpg" },
     { alt: "OEM Badge 1", src: "/logos/kia.webp" },
  ],
  productImages: [
    { alt: "Shark Fin Antenna", src: "/images/shark_fin_antenna.jpg" },
    { alt: "ADAS Module", src: "/images/adas_system.jpeg" },
    { alt: "Wireless Charger", src: "/images/wireless_charging.jpeg" },
  ],
  videos: [
    {
      id: 1,
      title: "ADAS Radar Detection",
      src: "https://www.youtube.com/embed/ADASRadarVideoId",
    },
    {
      id: 2,
      title: "Drone Flight Demo",
      src: "https://www.youtube.com/embed/DroneFlightVideoId",
    },
  ],
};

const cardVariants = {
  hover: {
    scale: 1.07,
    boxShadow: "0 0 20px rgba(0,123,255,0.7)",
    transition: { duration: 0.3 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MediaDownloadsPage = () => {
  const [key, setKey] = useState("logos");
  const [modalShow, setModalShow] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });

  const handleImageClick = (src, alt) => {
    setModalImage({ src, alt });
    setModalShow(true);
  };

  const handleModalClose = () => setModalShow(false);

  return (
    <Container className="py-5">
      {/* Intro Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-5 text-center"
      >
        <h1 style={{ color: "#007BFF" }}>Media & Downloads</h1>
        <p style={{ maxWidth: 700, margin: "0 auto", color: "#6c757d" }}>
          Stay updated with Futuretech Dynamics. Explore our brochures,
          capability decks, product catalogs, and the latest news — all in one
          place.
        </p>
      </motion.div>

      {/* Featured Downloads Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-5 mb-5"
        style={{ backgroundColor: "rgba(0,123,255,0.05)", borderRadius: 12 }}
        aria-label="Featured Downloads Section"
      >
        <h3 style={{ color: "#007BFF" }} className="mb-4">
          Featured Downloads
        </h3>
        <Row xs={1} sm={2} md={4} className="g-4">
          {featuredDownloads.map(({ id, title, description, pdf, glowColor }) => (
            <Col key={id}>
              <motion.div whileHover="hover" variants={cardVariants}>
                <Card
                  style={{
                    border: `2px solid ${glowColor}`,
                    borderRadius: 16,
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="h-100"
                >
                  <div
                    aria-label={`${title} PDF download preview`}
                    style={{
                      height: 180,
                      background: `linear-gradient(135deg, ${glowColor} 0%, transparent 100%)`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#007BFF",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      boxShadow: `0 0 15px ${glowColor}`,
                    }}
                  >
                    <FileText size={64} aria-hidden="true" />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{ flexGrow: 1 }}>{description}</Card.Text>
                    <Button
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-primary"
                      className="mt-auto"
                      style={{ borderRadius: 6 }}
                      aria-label={`Download PDF: ${title}`}
                    >
                      Download
                      <Download size={16} className="ms-2" aria-hidden="true" />
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.section>

      {/* News & Updates Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-5 mb-5"
        aria-label="News and Updates Section"
      >
        <h3 style={{ color: "#007BFF" }} className="mb-4">
          News & Updates
        </h3>
        <ListGroup
          variant="flush"
          style={{
            maxHeight: 280,
            overflowY: "auto",
            border: "1px solid #dee2e6",
            borderRadius: 8,
            padding: 10,
            position: "relative",
          }}
        >
          {newsUpdates.map(({ id, date, title, link }) => (
            <ListGroup.Item
              key={id}
              action
              href={link}
              target="_blank"
              style={{ color: "#212529", position: "relative" }}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <small
                  className="text-muted"
                  style={{ display: "block", fontSize: "0.8rem" }}
                  aria-label={`Date: ${date}`}
                >
                  {date}
                </small>
                {title}
              </div>
              <motion.span
                initial={{ x: -6, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              >
                <ArrowRight size={20} color="#007BFF" />
              </motion.span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </motion.section>

      {/* Media Gallery Section with Tabs */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-5"
        style={{ backgroundColor: "rgba(0,123,255,0.05)", borderRadius: 12 }}
        aria-label="Media Gallery Section"
      >
        <h3 style={{ color: "#007BFF" }} className="mb-4">
          Media Gallery
        </h3>
        <Tab.Container activeKey={key} onSelect={setKey}>
          <Nav variant="tabs" className="mb-4" role="tablist">
            <Nav.Item>
              <Nav.Link eventKey="logos" role="tab">
                Logos & OEM Badges
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="productImages" role="tab">
                Product Images
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="videos" role="tab">
                Videos
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="logos" role="tabpanel">
              <Row xs={4} sm={6} md={8} className="g-3">
                {mediaGallery.logos.map(({ alt, src }) => (
                  <Col key={alt} className="text-center">
                    <Image
                      src={src}
                      alt={alt}
                      thumbnail
                      style={{ maxHeight: 80, objectFit: "contain" }}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="productImages" role="tabpanel">
              <Row xs={1} sm={2} md={4} className="g-3">
                {mediaGallery.productImages.map(({ alt, src }) => (
                  <Col key={alt} className="text-center">
                    <Image
                      src={src}
                      alt={alt}
                      rounded
                      fluid
                      style={{ maxHeight: 140, objectFit: "cover", cursor: "pointer" }}
                      onClick={() => handleImageClick(src, alt)}
                      aria-haspopup="dialog"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleImageClick(src, alt);
                        }
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="videos" role="tabpanel">
              <Row xs={1} sm={1} md={2} className="g-4">
                {mediaGallery.videos.map(({ id, title, src }) => (
                  <Col key={id}>
                    <div
                      className="ratio ratio-16x9"
                      style={{ borderRadius: 8, overflow: "hidden" }}
                    >
                      <iframe
                        src={src}
                        title={title}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        aria-label={`Video titled ${title}`}
                      />
                    </div>
                    <div
                      className="mt-2 text-center"
                      style={{ fontWeight: "600", color: "#212529" }}
                    >
                      {title}
                    </div>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </motion.section>

      {/* Modal for full image view */}
      <Modal
        show={modalShow}
        onHide={handleModalClose}
        centered
        size="lg"
        aria-labelledby="modal-image-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-image-title">{modalImage.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image
            src={modalImage.src}
            alt={modalImage.alt}
            fluid
            style={{ maxHeight: "70vh", objectFit: "contain" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MediaDownloadsPage;
