import React from "react";
import { Container, Row, Col, Card, Button, ListGroup, Image } from "react-bootstrap";
import { motion } from "framer-motion";

const featuredDownloads = [
  {
    id: 1,
    title: "Corporate Brochure",
    description: "Overview of Futuretech Dynamics solutions, capabilities, and industries served.",
    pdf: "/downloads/corporate_brochure.pdf",
    glowColor: "rgba(0,123,255,0.75)", // Bootstrap primary blue with opacity
  },
  {
    id: 2,
    title: "Capability Deck (PIPL Future Tech Dynamics)",
    description: "In-depth look at our design, manufacturing, and RF/electronics expertise.",
    pdf: "/downloads/capability_deck.pdf",
    glowColor: "rgba(0,123,255,0.75)",
  },
  {
    id: 3,
    title: "Product Portfolio – Exterior & Interior Components",
    description: "Showcasing grilles, emblems, garnishes, fog lamps, trims, and more for leading OEMs.",
    pdf: "/downloads/product_portfolio.pdf",
    glowColor: "rgba(0,123,255,0.75)",
  },
  {
    id: 4,
    title: "Wireless & ADAS Solutions",
    description: "Details on Shark Fin Antennas, Wireless Charging, Keyless Entry, TPMS, ADAS modules.",
    pdf: "/downloads/wireless_adas_solutions.pdf",
    glowColor: "rgba(0,123,255,0.75)",
  },
];

const newsUpdates = [
  {
    id: 1,
    title: "New partnerships with leading OEMs and Tier-1 suppliers.",
    link: "https://www.linkedin.com/posts/futuretechdynamics_new-partnerships-activity-123456789/",
  },
  {
    id: 2,
    title: "Expansion of manufacturing facilities across India.",
    link: "https://futuretechdynamics.in/news/manufacturing-expansion",
  },
  {
    id: 3,
    title: "Participation in upcoming Auto Expo / Aero India / AgriTech events.",
    link: "https://futuretechdynamics.in/events/auto-expo-2025",
  },
  {
    id: 4,
    title: "Launch of next-gen Qi-certified wireless charging systems.",
    link: "https://futuretechdynamics.in/news/qi-certified-charging",
  },
];

const mediaGallery = {
  logos: [
    { alt: "OEM Logo 1", src: "/logos/oem1.png" },
    { alt: "OEM Logo 2", src: "/logos/oem2.png" },
    { alt: "OEM Badge 1", src: "/logos/badge1.png" },
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

const MediaDownloadsPage = () => {
  return (
    <Container className="py-5">
      {/* Intro */}
      <h1 className="text-center mb-4" style={{ color: "#007BFF" }}>
        Media & Downloads
      </h1>
      <p className="text-center mb-5" style={{ maxWidth: 700, margin: "0 auto", color: "#6c757d" }}>
        Stay updated with Futuretech Dynamics. Explore our brochures, capability decks, product catalogs,
        and the latest news — all in one place.
      </p>

      {/* Featured Downloads */}
      <h3 className="mb-4" style={{ color: "#007BFF" }}>
        🔖 Featured Downloads
      </h3>
      <Row xs={1} sm={2} md={4} className="g-4 mb-5">
        {featuredDownloads.map(({ id, title, description, pdf, glowColor }) => (
          <Col key={id}>
            <motion.div whileHover="hover" variants={cardVariants}>
              <Card
                style={{
                  border: `2px solid ${glowColor}`,
                  borderRadius: "16px",
                  cursor: "pointer",
                  height: "100%",
                }}
                className="h-100"
              >
                <div
                  style={{
                    height: 180,
                    background: `linear-gradient(135deg, ${glowColor} 0%, transparent 100%)`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#007BFF",
                    fontWeight: "bold",
                    fontSize: "3rem",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    boxShadow: `0 0 15px ${glowColor}`,
                  }}
                >
                  📄
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text flexGrow={1} style={{ flexGrow: 1, flexShrink: 0 }}>
                    {description}
                  </Card.Text>
                  <Button
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary"
                    className="mt-auto"
                    style={{ borderRadius: "6px" }}
                  >
                    Download PDF
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* News & Updates */}
      <h3 className="mb-4" style={{ color: "#007BFF" }}>
        📰 News & Updates
      </h3>
      <ListGroup
        variant="flush"
        style={{
          maxHeight: 250,
          overflowY: "auto",
          marginBottom: "3rem",
          border: "1px solid #dee2e6",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        {newsUpdates.map(({ id, title, link }) => (
          <ListGroup.Item
            key={id}
            action
            href={link}
            target="_blank"
            style={{ color: "#212529" }}
          >
            {title} <span style={{ color: "#007BFF" }}>↗</span>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Media Gallery */}
      <h3 className="mb-4" style={{ color: "#007BFF" }}>
        🎥 Media Gallery
      </h3>

      {/* Logos & OEM Badges */}
      <h5 style={{ marginBottom: "1rem", color: "#212529" }}>Logos & OEM Badges</h5>
      <Row xs={4} sm={6} md={8} className="g-3 mb-4">
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

      {/* Product Images */}
      <h5 style={{ marginBottom: "1rem", color: "#212529" }}>Product Images</h5>
      <Row xs={1} sm={2} md={4} className="g-3 mb-4">
        {mediaGallery.productImages.map(({ alt, src }) => (
          <Col key={alt} className="text-center">
            <Image
              src={src}
              alt={alt}
              rounded
              fluid
              style={{ maxHeight: 140, objectFit: "cover" }}
            />
          </Col>
        ))}
      </Row>

      {/* Videos */}
      <h5 style={{ marginBottom: "1rem", color: "#212529" }}>Videos</h5>
      <Row xs={1} sm={1} md={2} className="g-4">
        {mediaGallery.videos.map(({ id, title, src }) => (
          <Col key={id} className="embed-responsive embed-responsive-16by9">
            <iframe
              width="100%"
              height="250"
              src={src}
              title={title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MediaDownloadsPage;
