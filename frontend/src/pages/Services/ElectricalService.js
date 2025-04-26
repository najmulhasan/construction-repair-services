import React from "react";
import { Link } from "react-router-dom";
import "./ServicePage.css";

const ElectricalService = () => {
  return (
    <div className="service-page">
      <div className="service-page-header">
        <h1 className="service-page-title">Professional Electrical Services</h1>
        <p className="service-page-subtitle">
          Complete electrical solutions for homes and businesses provided by
          licensed electricians with a focus on safety, reliability, and energy
          efficiency.
        </p>
      </div>

      <section className="service-section">
        <h2 className="service-section-title">
          Residential Electrical Services
        </h2>
        <div className="service-content image-right">
          <div className="service-text">
            <p>
              Our residential electrical services are comprehensive, covering
              everything from minor repairs to complete home rewiring. Our
              licensed electricians are equipped to handle any electrical
              challenge in your home, ensuring all work meets or exceeds safety
              standards.
            </p>
            <p>
              We understand the importance of reliable electricity in modern
              homes and strive to provide solutions that not only fix immediate
              issues but also improve the overall safety and efficiency of your
              electrical systems.
            </p>
          </div>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              alt="Electrician installing outlet"
            />
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">
          Commercial Electrical Solutions
        </h2>
        <div className="service-content image-left">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              alt="Commercial electrical panel"
            />
          </div>
          <div className="service-text">
            <p>
              Our commercial electrical team specializes in the unique
              requirements of business environments, from retail stores to
              industrial facilities. We offer services designed to minimize
              downtime while maximizing the safety and efficiency of your
              electrical infrastructure.
            </p>
            <p>
              With advanced diagnostic equipment and extensive experience, we
              can identify and resolve issues quickly, implement energy-saving
              solutions, and help you maintain compliance with all relevant
              electrical codes and regulations.
            </p>
          </div>
        </div>
      </section>

      <section className="service-features">
        <h2 className="service-section-title">
          Our Electrical Services Include
        </h2>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Electrical Repairs</h3>
            <p className="feature-desc">
              Fast, reliable repairs for all electrical issues, from faulty
              outlets and switches to circuit breaker problems and wiring
              repairs.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💡</div>
            <h3 className="feature-title">Lighting Installation</h3>
            <p className="feature-desc">
              Expert installation of all types of lighting fixtures, including
              recessed lighting, ceiling fans, chandeliers, and outdoor
              lighting.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔌</div>
            <h3 className="feature-title">Outlet & Switch Installation</h3>
            <p className="feature-desc">
              Installation and upgrade of electrical outlets and switches,
              including GFCI outlets for wet areas and USB-enabled outlets.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Panel Upgrades</h3>
            <p className="feature-desc">
              Upgrade your electrical panel to accommodate increased electrical
              demands and improve safety with modern circuit breakers.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏠</div>
            <h3 className="feature-title">Home Rewiring</h3>
            <p className="feature-desc">
              Complete or partial rewiring services to replace outdated or
              damaged wiring and bring your electrical system up to code.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Electrical Inspections</h3>
            <p className="feature-desc">
              Thorough inspections to identify potential hazards and ensure your
              electrical system meets all safety standards.
            </p>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2 className="cta-title">Need Reliable Electrical Services?</h2>
        <p className="cta-desc">
          From simple electrical repairs to complete system upgrades, our
          licensed electricians provide safe, efficient solutions for all your
          electrical needs.
        </p>
        <Link to="/contact" className="cta-button">
          Schedule a Service
        </Link>
      </div>
    </div>
  );
};

export default ElectricalService;
