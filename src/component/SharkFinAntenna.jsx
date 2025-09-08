import React from "react";
import { motion } from "framer-motion";
import { Wifi, Cpu, Zap, Car } from "lucide-react";
import { Card, Button } from "react-bootstrap";

export default function SharkFinAntenna() {
  return (
    <div className="min-h-screen bg-light py-5 px-3">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h1 className="fw-bold display-5 text-dark">
            Shark Fin Antenna – Custom Design & Manufacturing
          </h1>
          <p className="lead text-secondary mt-3">
            Futuretech Dynamics specializes in custom-designed Shark Fin Antennas,
            integrating AM/FM, GPS, and LTE capabilities into a sleek housing.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="d-flex flex-wrap justify-content-center gap-4 mb-5 text-secondary"
        >
        
        </motion.div>

        {/* Key Performance Metrics */}
        <Card className="shadow rounded-4 mb-4">
          <Card.Body>
            <h2 className="h5 fw-semibold mb-4">📊 Key Performance Metrics</h2>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="bg-light p-3 rounded">
                  <strong>AM/FM:</strong> VSWR ≤ 1.4 | Gain ≥ 20.5 dB
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-light p-3 rounded">
                  <strong>GPS:</strong> VSWR ≤ 1.5 | Gain ≥ 33 dB
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-light p-3 rounded">
                  <strong>LTE:</strong> VSWR ≤ 1.5 (Typical)
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Why Choose Us */}
        <Card className="shadow rounded-4 mb-4">
          <Card.Body>
            <h2 className="h5 fw-semibold mb-4">🌟 Why Choose Us?</h2>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center gap-2 mb-2">
                <Cpu size={18} className="text-success" /> Custom Designs: Fully tailored
                shapes and sizes.
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <Zap size={18} className="text-success" /> End-to-End Manufacturing: Reliable,
                high-quality production.
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <Wifi size={18} className="text-success" /> Global Standards Compliance: Tuned
                for worldwide performance.
              </li>
              <li className="d-flex align-items-center gap-2">
                <Car size={18} className="text-success" /> Seamless Integration into automotive,
                aerospace & more.
              </li>
            </ul>
          </Card.Body>
        </Card>

        {/* Services Provided */}
        <Card className="shadow rounded-4 mb-4">
          <Card.Body>
            <h2 className="h5 fw-semibold mb-4">🛠️ Services Provided</h2>
            <div className="row g-3">
              <div className="col-md-6">⚡ Prototyping: Rapid development for testing & validation.</div>
              <div className="col-md-6">⚡ Performance Tuning: Optimized for AM/FM, GPS & LTE.</div>
              <div className="col-md-6">⚡ Quality Assurance: Rigorous testing for reliability.</div>
              <div className="col-md-6">⚡ Integration Support: Automotive, aerospace, and more.</div>
              <div className="col-md-6">⚡ Expert Consultation: Guidance on design & performance.</div>
            </div>
          </Card.Body>
        </Card>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-5"
        >
          <Button size="lg" className="px-5 py-3 rounded-4" variant="primary">
            Contact Us Today →
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
