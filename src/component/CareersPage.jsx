import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CareersPage = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-primary">Careers at FutureTech</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>
            Join FutureTech and help us shape the future of mobility and smart
            electronics. We foster innovation, growth, and collaboration across
            our global teams.
          </p>
          <p>
            Explore opportunities in engineering, R&D, operations, and leadership.
            Reach out via our contact page or check back soon for openings.
          </p>
          <Button
            as={Link}
            to="/contactus"
            variant="primary"
            size="lg"
            className="mt-3"
            aria-label="Go to Contact Us page"
          >
            Contact Us
          </Button>
        </div>
        <div className="col-md-6">
          <img
            src="/images/careers.png"
            alt="FutureTech Team at Work"
            className="img-fluid rounded shadow"
            loading="lazy"
            style={{ maxHeight: 350, objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
