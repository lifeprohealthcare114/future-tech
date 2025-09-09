import React, { useEffect, useRef, useState } from "react";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Dummy icons for highlights - replace with your SVG or icon components
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

// Counter component animates from 0 to target number on scroll into viewport
const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
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
    <div ref={ref} style={{ fontSize: 36, fontWeight: "700", color: "#007BFF" }}>
      {count}
      {suffix}
    </div>
  );
};

// 🔥 Full Enhanced Animated Tech Background
const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techElements = [
    { symbol: "📡", label: "RF Signals" },
    { symbol: "🛰️", label: "Satellite" },
    { symbol: "⚡", label: "Power" },
    { symbol: "🔧", label: "Engineering" },
    { symbol: "🚗", label: "Automotive" },
    { symbol: "📊", label: "Analytics" },
    { symbol: "🎯", label: "ADAS" },
    { symbol: "📶", label: "Wireless" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(102,126,234,0.8) 0%, rgba(118,75,162,0.6) 25%, rgba(240,147,251,0.4) 50%, rgba(245,87,108,0.6) 75%, rgba(79,172,254,0.8) 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Pulsing Grid Effect */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.15) 2px, transparent 2px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Circuit Board Pattern */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(45deg, rgba(255,0,255,0.2) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,0,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px, 30px 30px, 60px 60px, 60px 60px",
        }}
      />

      {/* Floating Tech Elements */}
      {techElements.map((element, i) => (
        <motion.div
          key={i}
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1200),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
            rotate: 0,
          }}
          animate={{
            x: [
              Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
            ],
            y: [
              Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.5 }}
          style={{
            position: "absolute",
            fontSize: "2rem",
            zIndex: 1,
            cursor: "pointer",
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          >
            {element.symbol}
          </motion.div>
        </motion.div>
      ))}

      {/* Orbiting Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          initial={{
            x:
              (typeof window !== "undefined" ? window.innerWidth : 1200) / 2,
            y:
              (typeof window !== "undefined" ? window.innerHeight : 800) / 2,
          }}
          animate={{
            x: [
              (typeof window !== "undefined" ? window.innerWidth : 1200) / 2 +
                Math.cos(i * 0.4) * (200 + i * 20),
              (typeof window !== "undefined" ? window.innerWidth : 1200) / 2 +
                Math.cos(i * 0.4 + Math.PI) * (200 + i * 20),
              (typeof window !== "undefined" ? window.innerWidth : 1200) / 2 +
                Math.cos(i * 0.4) * (200 + i * 20),
            ],
            y: [
              (typeof window !== "undefined" ? window.innerHeight : 800) / 2 +
                Math.sin(i * 0.4) * (200 + i * 20),
              (typeof window !== "undefined" ? window.innerHeight : 800) / 2 +
                Math.sin(i * 0.4 + Math.PI) * (200 + i * 20),
              (typeof window !== "undefined" ? window.innerHeight : 800) / 2 +
                Math.sin(i * 0.4) * (200 + i * 20),
            ],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: 8 + Math.random() * 12,
            height: 8 + Math.random() * 12,
            borderRadius: "50%",
            background: `radial-gradient(circle, 
              rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.9) 0%, 
              rgba(255, ${Math.random() * 255}, ${Math.random() * 255}, 0.6) 100%)`,
            boxShadow: `0 0 20px rgba(${Math.random() * 255}, ${
              Math.random() * 255
            }, 255, 0.8)`,
          }}
        />
      ))}

      {/* Mouse Follow Effect */}
      <motion.div
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        style={{
          position: "fixed",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
          border: "2px solid rgba(255,255,255,0.2)",
        }}
      />

      {/* Scanning Line Effect */}
      <motion.div
        animate={{
          y: ["-100vh", "100vh"],
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "4px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.8) 50%, transparent 100%)",
          boxShadow: "0 0 20px rgba(0,255,255,0.6)",
        }}
      />

      {/* Binary Rain Effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y:
              (typeof window !== "undefined" ? window.innerHeight : 800) + 100,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            color: "rgba(0,255,0,0.7)",
            fontSize: "12px",
            fontFamily: "monospace",
            textShadow: "0 0 5px rgba(0,255,0,0.8)",
            userSelect: "none",
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
          <br />
          {Math.random() > 0.5 ? "0" : "1"}
          <br />
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}
    </div>
  );
};

const quickHighlights = [
  { iconLabel: "50+", text: "Years Automotive Expertise" },
  { iconLabel: "50 GHz", text: "RF & Microwave Innovation" },
  { iconLabel: "ADAS", text: "Advanced ADAS & Wireless Components" },
  {
    iconLabel: "Global",
    text: "Global Presence (India, USA, Germany, Brazil)",
  },
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
      {/* Hero Section */}
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
        <AnimatedBackground />
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
          }}
        >
          Enabling the Future of Mobility & Smart Electronics
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline-light"
            size="lg"
            style={{ marginRight: 16 }}
            href="#solutions"
          >
            Explore Solutions
          </Button>
          <Button variant="light" size="lg" href="#contact">
            Contact Us
          </Button>
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ marginTop: 48, fontSize: 32, color: "#FFF" }}
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
    </>
  );
};

export default HomePage;
