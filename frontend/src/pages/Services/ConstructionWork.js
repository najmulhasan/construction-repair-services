import React from "react";
import { Link } from "react-router-dom";
import "./ServicePage.css";
import construction from "../../images/ConstructionRenuvation.jpg";
import construction2 from "../../images/construction.jpg";
// import construction3 from "../../images/ConstructionRenuvation3.jpg";
// import construction4 from "../../images/ConstructionRenuvation4.jpg";

const ConstructionWork = () => {
  return (
    <div className="service-page">
      <div className="service-page-header">
        <h1 className="service-page-title">
          Professional Construction Services
        </h1>
        <p className="service-page-subtitle">
          From custom home renovations to commercial projects, our experienced
          team delivers quality construction with attention to detail and
          craftsmanship at every step.
        </p>
      </div>

      <section className="service-section">
        <h2 className="service-section-title">Home Renovation & Remodeling</h2>
        <div className="service-content image-right">
          <div className="service-text">
            <p>
              Transform your living space with our comprehensive home renovation
              and remodeling services. Whether you're looking to update a
              kitchen or bathroom, finish a basement, add an extension, or
              completely renovate your entire home, our skilled craftsmen bring
              your vision to life with quality workmanship.
            </p>
            <p>
              We handle every aspect of the renovation process, from initial
              design concepts and obtaining permits to selecting materials and
              completing construction. Our project managers ensure your
              renovation stays on schedule and within budget while maintaining
              the highest standards of quality throughout the project.
            </p>
          </div>
          <div className="service-image">
            <img src={construction} alt="construction" />
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">New Home Construction</h2>
        <div className="service-content image-left">
          <div className="service-image">
            <img src={construction2} alt="New home construction" />
          </div>
          <div className="service-text">
            <p>
              Building your dream home is one of life's most significant
              investments. Our new home construction services provide a seamless
              experience from initial concept to final walkthrough. We work
              closely with you and your architect to bring architectural plans
              to life, ensuring every detail meets your expectations.
            </p>
            <p>
              Our construction team combines traditional craftsmanship with
              modern building techniques and materials to create homes that are
              beautiful, functional, and built to last. From foundation to
              finishing touches, we maintain rigorous quality control standards
              at every stage of construction.
            </p>
          </div>
        </div>
      </section>

      <section className="service-features">
        <h2 className="service-section-title">
          Our Construction Services Include
        </h2>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">🏠</div>
            <h3 className="feature-title">Kitchen Remodeling</h3>
            <p className="feature-desc">
              Complete kitchen renovations including custom cabinetry,
              countertop installation, appliance upgrades, lighting, flooring,
              and architectural modifications.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛁</div>
            <h3 className="feature-title">Bathroom Renovations</h3>
            <p className="feature-desc">
              Luxury bathroom upgrades with custom showers, tubs, vanities, tile
              work, plumbing fixtures, and accessibility modifications for aging
              in place.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏗️</div>
            <h3 className="feature-title">Home Additions</h3>
            <p className="feature-desc">
              Expertly designed and constructed home additions that seamlessly
              integrate with your existing structure, including room additions,
              second stories, and extensions.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏢</div>
            <h3 className="feature-title">Commercial Construction</h3>
            <p className="feature-desc">
              Professional construction services for retail spaces, offices,
              restaurants, and other commercial properties, focusing on
              durability and functionality.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔨</div>
            <h3 className="feature-title">Custom Carpentry</h3>
            <p className="feature-desc">
              Skilled craftsmen creating custom built-ins, cabinetry, trim work,
              and architectural details that add character and functionality to
              your space.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏚️</div>
            <h3 className="feature-title">Historic Restoration</h3>
            <p className="feature-desc">
              Specialized restoration services for historic properties,
              preserving architectural heritage while incorporating modern
              amenities and building standards.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">
          Commercial Construction Projects
        </h2>
        <div className="service-content image-right">
          <div className="service-text">
            <p>
              Our commercial construction services cater to businesses of all
              sizes, from small retail fit-outs to large-scale office
              renovations. We understand that minimizing downtime is critical
              for businesses, so we develop efficient construction schedules and
              maintain clear communication throughout the project.
            </p>
            <p>
              Whether you're expanding your existing space, relocating to a new
              property, or building from the ground up, our team delivers
              quality construction that enhances your business environment while
              adhering to commercial building codes and regulations.
            </p>
          </div>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1556156653-e5a7c69cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              alt="Commercial construction project"
            />
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Our Construction Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3 className="step-title">Initial Consultation</h3>
            <p className="step-desc">
              We begin by understanding your vision, requirements, and budget.
              This initial discussion helps us establish the scope of work and
              identify key objectives for your project.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3 className="step-title">Design & Planning</h3>
            <p className="step-desc">
              Our design team works with you to develop detailed plans and
              specifications. We address structural considerations, material
              selections, and ensure compliance with building codes.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Bidding & Contracts</h3>
            <p className="step-desc">
              We provide transparent, detailed estimates and contracts that
              clearly outline the scope of work, timeline, payment schedule, and
              specifications for your project.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3 className="step-title">Permits & Approvals</h3>
            <p className="step-desc">
              Our team handles the permitting process, coordinating with local
              authorities to secure necessary approvals before construction
              begins.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <h3 className="step-title">Construction Phase</h3>
            <p className="step-desc">
              Expert craftsmen execute the construction according to plans while
              project managers oversee quality control, safety compliance, and
              schedule adherence.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">6</div>
            <h3 className="step-title">Final Inspections</h3>
            <p className="step-desc">
              We coordinate inspections with local authorities and conduct our
              own rigorous quality check to ensure all work meets applicable
              codes and our high standards.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">7</div>
            <h3 className="step-title">Project Completion</h3>
            <p className="step-desc">
              After a thorough walkthrough and addressing any final details, we
              provide you with all relevant documentation and warranties before
              finalizing the project.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">
          Sustainable Building Practices
        </h2>
        <div className="service-content image-left">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              alt="Sustainable construction materials"
            />
          </div>
          <div className="service-text">
            <p>
              We're committed to environmentally responsible construction
              practices. Our team can incorporate sustainable building
              techniques and materials into your project, including
              energy-efficient systems, water conservation features, and
              eco-friendly materials.
            </p>
            <p>
              Whether you're pursuing formal green building certification or
              simply want to reduce environmental impact and long-term operating
              costs, we can recommend appropriate sustainable options for your
              specific project while maintaining quality and durability.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="service-section-title">What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p className="testimonial-text">
              "The team transformed our outdated kitchen into a beautiful,
              functional space that exceeded our expectations. Their attention
              to detail and craftsmanship was impressive, and they completed the
              project on time and within our budget."
            </p>
            <p className="testimonial-author">— Robert & Susan Johnson</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              "We hired them for our office renovation, and they understood the
              importance of minimizing disruption to our business. The work was
              completed after hours and on weekends, and the result is a modern,
              productive workspace that our employees love."
            </p>
            <p className="testimonial-author">
              — James Wilson, CEO of Wilson Enterprises
            </p>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2 className="cta-title">Ready to Start Your Construction Project?</h2>
        <p className="cta-desc">
          Contact us today to schedule a consultation and bring your
          construction vision to life with our expert team of professionals.
        </p>
        <Link to="/contact" className="cta-button">
          Request a Free Estimate
        </Link>
      </div>
    </div>
  );
};

export default ConstructionWork;
