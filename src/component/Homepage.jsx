import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Slider images for hero background
const sliderImages = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
  "/images/slider4.png",
];

// Background slider component with smooth fade transitions
const backgroundVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const HeroBackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <AnimatePresence>
        <motion.img
          key={sliderImages[currentIndex]}
          src={sliderImages[currentIndex]}
          alt=""
          initial="enter"
          animate="center"
          exit="exit"
          variants={backgroundVariants}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        />
      </AnimatePresence>
      {/* Optional dark overlay for better text contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 30, 77, 0.6)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </div>
  );
};

// Dummy icons for highlights
const IconPlaceholder = ({ label }) => (
  <div
    style={{
      fontSize: 40,
      color: "#007BFF",
      marginBottom: 12,
      fontWeight: "bold",
    }}
  >
    {label}
  </div>
);

// Counter component
const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef();
  const started = React.useRef(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight && !started.current) {
        started.current = true;
        let start = 0;
        const increment = end / (duration * 60);
        const counterInterval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counterInterval);
          }
          setCount(Math.floor(start));
        }, 1000 / 60);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [end, duration]);

  return (
    <div
      ref={ref}
      style={{ fontSize: 36, fontWeight: "700", color: "#007BFF" }}
      aria-label={`Counter to ${end}${suffix}`}
    >
      {count}
      {suffix}
    </div>
  );
};

const quickHighlights = [
  { iconLabel: "50+", text: "Years Automotive Expertise" },
  { iconLabel: "50 GHz", text: "RF & Microwave Innovation" },
  { iconLabel: "ADAS", text: "Advanced ADAS & Wireless Components" },
  { iconLabel: "Global", text: "Global Presence (India, USA, Germany, Brazil)" },
];

const featuredSolutions = [
  {
    id: 1,
    title: "Shark Fin Antennas",
    description: "High performance automotive antenna solutions.",
    imgSrc: "/images/shark_fin_antenna.jpg",
  },
  {
    id: 2,
    title: "Advanced ADAS",
    description: "Level 3 & 4 advanced driver assist systems.",
    imgSrc: "/images/adas_system.jpeg",
  },
  {
    id: 3,
    title: "Wireless Charging",
    description: "Qi-certified fast charging pads & EV support.",
    imgSrc: "/images/wireless_charging.jpeg",
  },
  {
    id: 4,
    title: "Keyless Entry System",
    description:
      "Secure and convenient keyless entry solutions with rolling code encryption",
    imgSrc: "/images/keyless.png",
  },
];

const clientLogos = [
  { alt: "GM", src: "/logos/mg.png" },
  { alt: "Toyota", src: "/logos/toyota.jpg" },
  { alt: "Honda", src: "/logos/honda.jpg" },
  { alt: "ISRO", src: "/logos/isro.png" },
  { alt: "DRDO", src: "/logos/drdo.jpg" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const HomePage = () => {
  return (
    <>
      {/* Hero Section with background image slider */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          color: "#212529",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
          overflow: "hidden",
        }}
      >
        <HeroBackgroundSlider />
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{
            fontSize: "3.5rem",
            fontWeight: "900",
            maxWidth: "700px",
            marginBottom: 24,
            color: "#FFFFFF",
            textShadow: "0 0 15px rgba(0,0,0,0.7)",
            zIndex: 2,
            position: "relative",
          }}
        >
          Enabling the Future of Mobility & Smart Electronics
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          style={{ zIndex: 2, position: "relative" }}
        >
          <Button
            variant="outline-light"
            size="lg"
            style={{ marginRight: 16 }}
            href="#solutions"
          >
            Explore Solutions
          </Button>
          <Button variant="light" size="lg" href="contactus">
            Contact Us
          </Button>
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ marginTop: 48, fontSize: 32, color: "#FFF", zIndex: 2, position: "relative" }}
          aria-label="Scroll down indicator"
        >
          ↓
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          color: "#212529",
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        <Container>
          <Row className="text-center">
            {quickHighlights.map(({ iconLabel, text }, index) => {
              const number = parseInt(iconLabel);
              const hasNumber = !isNaN(number);

              return (
                <Col key={index} md={3} sm={6} xs={12} className="mb-4">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    variants={fadeInUp}
                  >
                    {hasNumber ? (
                      <Counter
                        end={number}
                        duration={2}
                        suffix={iconLabel.includes("+") ? "+" : ""}
                      />
                    ) : (
                      <IconPlaceholder label={iconLabel} />
                    )}
                    <div style={{ fontSize: 18 }}>{text}</div>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Featured Solutions Section */}
      <section
        id="solutions"
        style={{ paddingTop: 60, paddingBottom: 60, backgroundColor: "#F9FAFB" }}
      >
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: "center", marginBottom: 50 }}
          >
            Featured Solutions
          </motion.h2>

          <Carousel indicators={true} interval={5000} pause="hover">
            {featuredSolutions.map((solution, idx) => (
              <Carousel.Item key={solution.id}>
                <Row className="align-items-center justify-content-center">
                  {/* Image on left */}
                  <Col md={6}>
                    <motion.img
                      src={solution.imgSrc}
                      alt={solution.title}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                      }}
                    />
                  </Col>

                  {/* Content on right */}
                  <Col md={6}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={idx}
                      variants={fadeInUp}
                    >
                      <h3 style={{ fontWeight: "700", marginBottom: 16 }}>
                        {solution.title}
                      </h3>
                      <p style={{ fontSize: 16, color: "#555", marginBottom: 24 }}>
                        {solution.description}
                      </p>
                      <Link to={`/solutions/${solution.id}`}>
                        <Button variant="primary" size="lg">
                          Learn More →
                        </Button>
                      </Link>
                    </motion.div>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Clients Carousel Section */}
      <section
        style={{
          paddingTop: 40,
          paddingBottom: 40,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            Trusted By Leading Clients
          </motion.h2>
          <Carousel indicators={false} interval={2500} pause={false}>
            {clientLogos.map(({ alt, src }, i) => (
              <Carousel.Item key={i}>
                <Row className="justify-content-center align-items-center">
                  <Col
                    xs={6}
                    md={2}
                    className="d-flex justify-content-center mb-3 mb-md-0"
                  >
                    <img
                      src={src}
                      alt={alt}
                      style={{
                        maxHeight: 80,
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Overview Section: About Us preview */}
      <section
        style={{
          backgroundColor: "#f8f9fa",
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="/images/futuretech.png"
                alt="FutureTech Dynamics Facility Overview"
                style={{
                  width: "100%",
                  borderRadius: 16,
                  boxShadow: "0 8px 24px rgba(0, 123, 255, 0.3)",
                  objectFit: "cover",
                  maxHeight: 350,
                }}
              />
            </Col>
            <Col md={6}>
              <h2 className="text-primary fw-bold mb-4">
                About FutureTech Dynamics
              </h2>
              <p style={{ fontSize: 18, color: "#212529", maxWidth: 600 }}>
                Leveraging decades of experience and cutting-edge technology,
                FutureTech Dynamics is pioneering the future of connected
                mobility with innovative solutions in smart electronics,
                connectivity, and advanced driver assistance.
              </p>
              <Button as={Link} to="/about" variant="primary" size="lg">
                Learn More About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
