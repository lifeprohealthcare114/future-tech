import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const sections = [
  { id: "home", label: "Home", path: "/" },
  { id: "capabilities", label: "Capabilities", path: "/capabilities" },
  { id: "industries", label: "Industries Served", path: "/industriesserved" },
  { id: "projects", label: "Projects & Case Studies", path: "/projects" },
  { id: "media", label: "Media & Downloads", path: "/media" },
];

const exploreMoreSections = [
  { id: "about", label: "About Us", desc: "Company heritage, vision, and global presence overview.", imgSrc: "/images/about_us_thumb.jpg", },
  { id: "contact", label: "Contact Us", desc: "Reach our offices, send inquiries, or apply for careers.", imgSrc: "/images/contact_us_thumb.jpg" },
  { id: "careers", label: "Careers", desc: "Join FutureTech and innovate with our R&D culture.", imgSrc: "/images/careers_thumb.jpg" },
];

const solutionsSections = [
  { id: "solutions-fintech", label: "Shark Fin Antenna", desc: "Custom-designed shark fin antennas with AM/FM, GPS, LTE.", imgSrc: "/images/shark_fin_antenna.jpg", link: "/solutions/1" },
  { id: "solutions-adas", label: "ADAS & Smart Mobility", desc: "Cameras, LiDAR, Radar, driver monitoring systems.", imgSrc: "/images/adas_system.jpeg", link: "/solutions/2" },
  { id: "solutions-rf", label: "Wireless Charging Solutions", desc: "Next-gen wireless charging for automotive, heavy-duty vehicles, and drones.", imgSrc: "/images/wireless_charging.jpeg", link: "/solutions/3" },
  { id: "solutions-emerging", label: "Keyless Entry System", desc: "Secure and convenient keyless entry solutions with rolling code encryption.", imgSrc: "/images/keyless.png", link: "/solutions/4" },
];

const dropdownVariants = {
  open: { opacity: 1, scaleY: 1, display: "block", transition: { duration: 0.25, ease: "easeOut" }, transformOrigin: "top center" },
  closed: { opacity: 0, scaleY: 0, transitionEnd: { display: "none" }, transition: { duration: 0.2, ease: "easeIn" }, transformOrigin: "top center" },
};

const Header = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  // ✅ Scroll spy only on homepage
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 4;
      let current = "home";

      const combinedSections = [...sections, ...exploreMoreSections];
      for (const section of combinedSections) {
        const elem = document.getElementById(section.id);
        if (elem && elem.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // ✅ Route-based highlight for all pages
  useEffect(() => {
    const matched = sections.find((sec) => sec.path === location.pathname);
    if (matched) setActiveSection(matched.id);
  }, [location.pathname]);

  const collapseMenus = () => {
    setExpanded(false);
    setSolutionsOpen(false);
    setExploreOpen(false);
  };

  const renderDropdownItems = (items) =>
    items.map(({ id, label, desc, imgSrc, link }) => {
      const ItemTag = link ? Link : "a";
      return (
        <ItemTag
          key={id}
          to={link}
          href={link ? undefined : `#${id}`}
          onClick={collapseMenus}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: activeSection === id ? "#007BFF" : "#555",
            fontWeight: activeSection === id ? "600" : "normal",
            padding: "10px 0",
            borderBottom: "1px solid #ddd",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e9f5ff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <img
            src={imgSrc}
            alt={label}
            loading="lazy"
            style={{ width: 70, height: 50, objectFit: "cover", borderRadius: 6, marginRight: 15, boxShadow: "0 0 10px #007BFF", flexShrink: 0 }}
          />
          <div>
            <div style={{ fontSize: 16, marginBottom: 6 }}>{label}</div>
            <div style={{ fontSize: 13, color: "#777", maxWidth: 320, lineHeight: 1.3 }}>{desc}</div>
          </div>
        </ItemTag>
      );
    });

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      expand="lg"
      variant="light"
      bg="light"
      sticky="top"
      className="shadow-sm"
      style={{
        backdropFilter: "saturate(180%) blur(10px)",
        backgroundColor: "rgba(249, 250, 251, 0.95)",
        boxShadow: "0 1px 6px rgba(0, 123, 255, 0.3)",
      }}
    >
      <Container>
       <Navbar.Brand 
  as={Link} 
  to="/" 
  className="fw-bold text-primary d-flex align-items-center" 
  style={{ fontSize: "1.5rem", letterSpacing: "2px" }} 
  onClick={collapseMenus}
>
  <img
    src="/futuretech.png"  // replace with your actual logo file path
    alt="FutureTech"
    style={{ height: 75, marginRight: 12 }}
    loading="lazy"
  /> 
</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {sections.map(({ id, label, path }) => (
              <Nav.Link
                as={Link}
                to={path}
                key={id}
                onClick={collapseMenus}
                className="position-relative px-3"
                style={{
                  color: activeSection === id ? "#007BFF" : undefined,
                  fontWeight: activeSection === id ? "600" : "normal",
                }}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="underline"
                    style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, backgroundColor: "#007BFF", borderRadius: 2 }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Nav.Link>
            ))}
            {/* Solutions Dropdown */}
            <Nav.Item
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
              className="position-relative"
              style={{ cursor: "pointer", padding: "0 0.75rem" }}
            >
              <Nav.Link className="d-flex align-items-center">
                Solutions
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill ms-1" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592c.86 0 1.319 1.013.752 1.658l-4.796 5.482a1 1 0 0 1-1.505 0z" />
                </svg>
              </Nav.Link>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    className="shadow"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      width: "480px",
                      marginTop: "0.5rem",
                      borderRadius: "0.25rem",
                      background: "#f9f9f9",
                      color: "#333",
                      zIndex: 1050,
                      padding: "16px 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {renderDropdownItems(solutionsSections)}
                  </motion.div>
                )}
              </AnimatePresence>
            </Nav.Item>

            {/* Explore More Dropdown */}
            <Nav.Item
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
              className="position-relative"
              style={{ cursor: "pointer", padding: "0 0.75rem" }}
            >
              <Nav.Link className="d-flex align-items-center">
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill ms-1" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592c.86 0 1.319 1.013.752 1.658l-4.796 5.482a1 1 0 0 1-1.505 0z" />
                </svg>
              </Nav.Link>
              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    className="shadow"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      width: "480px",
                      marginTop: "0.5rem",
                      borderRadius: "0.25rem",
                      background: "#f9f9f9",
                      color: "#333",
                      zIndex: 1050,
                      padding: "16px 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {renderDropdownItems(exploreMoreSections)}
                  </motion.div>
                )}
              </AnimatePresence>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
