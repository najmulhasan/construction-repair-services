import React from "react";
import { Link } from "react-router-dom";
import "./ServicePage.css";
import plumbing from "../../images/PlumbingSetting.jpg";
import plumbing2 from "../../images/PlumbingGizzersetup.jpg";
import plumbing3 from "../../images/PlumbingSetting2jpg.jpg";
import plumbing4 from "../../images/h2.jpg";

const Plumbing = () => {
  return (
    <div className="service-page">
      <div className="service-page-header">
        <h1 className="service-page-title">Professional Plumbing Services</h1>
        <p className="service-page-subtitle">
          From emergency repairs to new installations, our licensed plumbers
          deliver reliable solutions for all your residential and commercial
          plumbing needs.
        </p>
      </div>

      <section className="service-section">
        <h2 className="service-section-title">Emergency Plumbing Repairs</h2>
        <div className="service-content image-right">
          <img src={plumbing} alt="plumbingWork" />

          <div className="service-text">
            <p>
              Plumbing emergencies require immediate attention to prevent water
              damage and property destruction. Our emergency plumbing team is
              available 24/7 to quickly respond to urgent situations including:
            </p>
            <ul className="service-list">
              <li>Burst or leaking pipes</li>
              <li>Overflowing toilets</li>
              <li>Water heater failures</li>
              <li>Sewer line backups</li>
              <li>Flooding and water damage mitigation</li>
            </ul>
            <p>
              Our technicians arrive equipped with advanced diagnostic tools and
              a comprehensive inventory of parts to resolve most emergencies in
              a single visit, minimizing disruption to your home or business.
            </p>
          </div>
          <div className="service-image"></div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">
          Plumbing Installation Services
        </h2>
        <div className="service-content image-left">
          <div className="service-image">
            <img src={plumbing2} alt="plumbingWork2" />
          </div>
          <div className="service-text">
            <p>
              Whether you're renovating your bathroom, upgrading your kitchen,
              or building a new home, our installation team delivers precision
              workmanship for all plumbing components. Our installation services
              include:
            </p>
            <ul className="service-list">
              <li>Bathroom fixtures (toilets, sinks, showers, tubs)</li>
              <li>Kitchen fixtures (sinks, disposals, dishwashers)</li>
              <li>Water heaters (traditional, tankless, and hybrid)</li>
              <li>Water filtration systems</li>
              <li>Pipe installation and replacement</li>
              <li>Sump pumps and backflow preventers</li>
            </ul>
            <p>
              We work with high-quality brands and materials, ensuring
              long-lasting performance and reliability for all installations.
            </p>
          </div>
        </div>
      </section>

      <section className="service-features">
        <h2 className="service-section-title">
          Our Comprehensive Plumbing Services
        </h2>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">🚿</div>
            <h3 className="feature-title">Drain Cleaning</h3>
            <p className="feature-desc">
              Professional clearing of clogged drains using advanced techniques
              including hydro-jetting and video inspection to identify and
              resolve blockages completely.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🚽</div>
            <h3 className="feature-title">Toilet Repairs</h3>
            <p className="feature-desc">
              From running toilets to complete replacements, our technicians
              diagnose and fix all toilet issues promptly and efficiently.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔧</div>
            <h3 className="feature-title">Leak Detection</h3>
            <p className="feature-desc">
              State-of-the-art electronic leak detection technology to locate
              hidden leaks in walls, floors, and underground pipes without
              unnecessary demolition.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛁</div>
            <h3 className="feature-title">Bathroom Remodeling</h3>
            <p className="feature-desc">
              Complete plumbing services for bathroom renovations, including
              fixture relocation, pipe modifications, and custom installations.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔥</div>
            <h3 className="feature-title">Water Heater Services</h3>
            <p className="feature-desc">
              Installation, repair, and maintenance for all types of water
              heaters, with expertise in energy-efficient models that reduce
              utility costs.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌊</div>
            <h3 className="feature-title">Sewer Line Services</h3>
            <p className="feature-desc">
              Comprehensive sewer line inspections, repairs, and replacements
              using trenchless technology to minimize property disruption.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Commercial Plumbing Solutions</h2>
        <div className="service-content image-right">
          <div className="service-text">
            <p>
              Our commercial plumbing team understands the unique requirements
              of businesses, where plumbing issues can impact operations,
              customer experience, and revenue. We provide specialized services
              for:
            </p>
            <ul className="service-list">
              <li>Restaurants and food service establishments</li>
              <li>Retail stores and shopping centers</li>
              <li>Office buildings and corporate campuses</li>
              <li>Healthcare facilities</li>
              <li>Educational institutions</li>
              <li>Industrial facilities</li>
            </ul>
            <p>
              We schedule work to minimize disruption to your business
              operations, with options for after-hours and weekend service when
              necessary.
            </p>
          </div>
          <div className="service-image">
            <img src={plumbing3} alt="plumbingWork3" />
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Preventive Maintenance Plans</h2>
        <div className="service-content image-left">
          <div className="service-image">
            <img src={plumbing4} alt="plumbingWork4" />
          </div>
          <div className="service-text">
            <p>
              Regular plumbing maintenance prevents expensive emergencies and
              extends the lifespan of your plumbing system. Our maintenance
              plans include:
            </p>
            <ul className="service-list">
              <li>Annual inspections of all visible plumbing components</li>
              <li>Water pressure testing and adjustments</li>
              <li>Water heater maintenance and flushing</li>
              <li>Drain cleaning to prevent clogs</li>
              <li>Checking for leaks and potential issues</li>
              <li>Evaluation of pipe condition</li>
            </ul>
            <p>
              Maintenance plan customers receive priority scheduling and
              discounts on repairs and installations, providing peace of mind
              and cost savings.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Water Conservation Solutions</h2>
        <div className="service-content">
          <div className="service-text full-width">
            <p>
              We're committed to helping customers reduce water consumption
              through efficient plumbing solutions. Our water conservation
              services include:
            </p>
            <div className="two-column-list">
              <ul className="service-list">
                <li>Installation of low-flow fixtures and toilets</li>
                <li>Water-efficient appliance recommendations</li>
                <li>Irrigation system optimization</li>
                <li>Rainwater harvesting systems</li>
              </ul>
              <ul className="service-list">
                <li>Leak detection and repair</li>
                <li>Pressure-reducing valve installation</li>
                <li>Greywater systems</li>
                <li>Smart water monitoring solutions</li>
              </ul>
            </div>
            <p>
              These solutions not only conserve precious water resources but
              also reduce your utility bills and increase property value through
              sustainability improvements.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="service-section-title">What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p className="testimonial-text">
              "When our water heater failed on a Sunday morning, their plumber
              arrived within an hour. He quickly diagnosed the issue and had a
              new unit installed by afternoon. Exceptional service when we
              needed it most!"
            </p>
            <p className="testimonial-author">— Jennifer Rodriguez</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              "We've used their plumbing services for our restaurant for years.
              Their preventive maintenance has saved us from costly emergencies,
              and their commercial-grade installations have been flawless."
            </p>
            <p className="testimonial-author">
              — Michael Chen, Restaurant Owner
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">
          Why Choose Our Plumbing Services
        </h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Licensed & Insured Professionals</h3>
            <p>
              All our plumbers are fully licensed, insured, and
              background-checked for your peace of mind.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Transparent Pricing</h3>
            <p>
              We provide detailed estimates before beginning work, with no
              hidden fees or surprise charges.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Guaranteed Workmanship</h3>
            <p>
              We stand behind our work with industry-leading warranties on both
              parts and labor.
            </p>
          </div>
          <div className="benefit-item">
            <h3>24/7 Emergency Service</h3>
            <p>
              Round-the-clock availability for urgent plumbing issues that can't
              wait for regular business hours.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Clean & Respectful Service</h3>
            <p>
              Our technicians protect your property and clean up thoroughly
              after completing work.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Latest Tools & Technology</h3>
            <p>
              We invest in advanced diagnostic equipment and tools for
              efficient, lasting repairs.
            </p>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2 className="cta-title">Need Reliable Plumbing Services?</h2>
        <p className="cta-desc">
          Contact our expert plumbers today for prompt, professional service and
          solutions tailored to your specific needs.
        </p>
        <Link to="/contact" className="cta-button">
          Schedule Service
        </Link>
      </div>
    </div>
  );
};

export default Plumbing;
