import React from "react";
import { Link } from "react-router-dom";
import "./ServicePage.css";
import image from "../../images/electricalConnection.jpg";
import image2 from "../../images/electricalConnection2.jpg";
import image3 from "../../images/electricalConnection3.jpg";
import image4 from "../../images/ElectricalWaring.jpg";
import image5 from "../../images/ElectricalWaring2.jpg";

const Electrical = () => {
  return (
    <div className="service-page">
      <div className="service-page-header">
        <h1 className="service-page-title">Professional Electrical Services</h1>
        <p className="service-page-subtitle">
          Reliable electrical solutions for residential and commercial
          properties delivered by licensed electricians who prioritize safety,
          quality, and code compliance.
        </p>
      </div>

      <section className="service-section">
        <h2 className="service-section-title">
          Residential Electrical Services
        </h2>
        <div className="service-content image-right">
          <img src={image} alt="Electrician working on residential wiring" />
          <div className="service-text">
            <p>
              From minor repairs to complete home rewiring, our residential
              electrical services keep your home powered safely and efficiently.
              Our licensed electricians are trained to handle all aspects of
              home electrical systems with precision and attention to detail.
            </p>
            <p>
              We understand that electrical issues can be concerning for
              homeowners. That's why we take the time to clearly explain
              problems, recommend the most appropriate solutions, and implement
              repairs that meet the highest safety standards while respecting
              your budget.
            </p>
          </div>
          <div className="service-image">
            <img src={image2} alt="Electrician working on residential wiring" />
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">
          Commercial Electrical Solutions
        </h2>
        <div className="service-content image-left">
          <div className="service-image">
            <img src={image3} alt="Electrician working on commercial wiring" />
          </div>
          <div className="service-text">
            <p>
              Our commercial electrical services address the complex needs of
              businesses, from retail establishments and offices to restaurants
              and industrial facilities. We understand that electrical failures
              can impact your operations, staff, and customers.
            </p>
            <p>
              With expertise in commercial electrical systems, our team provides
              efficient installation, maintenance, and repair services that
              minimize downtime while ensuring compliance with commercial
              building codes and safety regulations. We work around your
              schedule to reduce disruption to your business.
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
            <div className="feature-icon">
              {" "}
              <img
                src={image4}
                alt="Electrician working on residential wiring"
              />
            </div>
            <h3 className="feature-title">Electrical Repairs</h3>
            <p className="feature-desc">
              Expert diagnosis and repair of electrical issues, from faulty
              outlets and switches to circuit breaker problems and wiring
              repairs, with a focus on safety and reliability.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Panel Upgrades</h3>
            <p className="feature-desc">
              Replacement of outdated or undersized electrical panels to support
              modern power demands, prevent overloading, and enhance safety with
              proper circuit protection.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔌</div>
            <h3 className="feature-title">Outlet & Switch Installation</h3>
            <p className="feature-desc">
              Installation of new outlets, GFCI protection in wet areas, USB
              charging outlets, smart switches, dimmers, and specialized outlets
              for appliances and equipment.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌟</div>
            <h3 className="feature-title">Lighting Installation</h3>
            <p className="feature-desc">
              Professional installation of indoor and outdoor lighting fixtures,
              recessed lighting, ceiling fans, track lighting, and security
              lighting to enhance ambiance and functionality.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <h3 className="feature-title">Rewiring Services</h3>
            <p className="feature-desc">
              Complete or partial rewiring of homes and businesses with aging or
              unsafe electrical systems, updating to modern wiring that meets
              current electrical codes.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏠</div>
            <h3 className="feature-title">Home Generator Installation</h3>
            <p className="feature-desc">
              Professional installation and maintenance of standby and portable
              generators with proper transfer switches to provide backup power
              during outages.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Electrical Safety Inspections</h2>
        <div className="service-content">
          <div className="service-text full-width">
            <p>
              Electrical safety is our top priority. Our comprehensive
              electrical inspections identify potential hazards before they
              become dangerous problems. We recommend these inspections when
              purchasing a new property, after renovations, or if your
              electrical system is over 25 years old.
            </p>
            <p>
              During an inspection, our licensed electricians examine your
              entire electrical system, including the service entrance, panel,
              wiring, outlets, switches, and fixtures. We check for code
              violations, fire hazards, and signs of wear that could lead to
              future problems. Following the inspection, you'll receive a
              detailed report with recommendations for improvements to enhance
              safety and efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Energy-Efficient Solutions</h2>
        <div className="service-content image-right">
          <div className="service-text">
            <p>
              Reduce your energy consumption and lower utility bills with our
              energy-efficient electrical solutions. We specialize in LED
              lighting conversions, smart home installations, and energy-saving
              electrical upgrades.
            </p>
            <p>
              Our electricians can perform an energy audit of your electrical
              systems and recommend upgrades that offer the best return on
              investment. From installing programmable thermostats and motion
              sensors to setting up complete smart home systems that automate
              lighting and climate control, we help you embrace modern
              technology while conserving energy.
            </p>
          </div>
          <div className="service-image">
            <img src={image5} alt="Electrician working on residential wiring" />
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2 className="cta-title">Need Electrical Services?</h2>
        <p className="cta-desc">
          Whether you're experiencing electrical problems, planning a
          renovation, or want to upgrade your electrical system, our licensed
          electricians are ready to provide safe, reliable solutions.
        </p>
        <Link to="/contact" className="cta-button">
          Schedule Electrical Service
        </Link>
      </div>
    </div>
  );
};

export default Electrical;
