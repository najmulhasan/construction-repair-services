import React from "react";
import { Link } from "react-router-dom";
import "./ServicePage.css";
import painting from "../../images/painting3.jpg";
import painting2 from "../../images/painting2.jpg";
import painting3 from "../../images/painting.jpg";

const Painting = () => {
  return (
    <div className="service-page">
      <div className="service-page-header">
        <h1 className="service-page-title">Professional Painting Services</h1>
        <p className="service-page-subtitle">
          Transform your space with expert interior and exterior painting
          services delivered by skilled professionals who prioritize
          preparation, precision, and premium materials.
        </p>
      </div>

      <section className="service-section">
        <h2 className="service-section-title">Interior Painting</h2>
        <div className="service-content image-right">
          <div className="service-text">
            <p>
              Our interior painting services bring new life to your indoor
              spaces with flawless finishes and expert color application. We
              understand that interior painting is more than just applying
              paint—it's about creating atmospheres that reflect your style and
              enhance your daily living experience.
            </p>
            <p>
              From single rooms to entire homes, our professional painters
              handle each project with meticulous attention to detail. We
              carefully prepare surfaces, protect your furnishings, use premium
              low-VOC paints, and execute precise application techniques to
              ensure stunning, long-lasting results.
            </p>
          </div>
          <div className="service-image">
            <img src={painting2} alt="Professional interior painting" />
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Exterior Painting</h2>
        <div className="service-content image-left">
          <div className="service-image">
            <img src={painting} alt="Professional exterior house painting" />
          </div>
          <div className="service-text">
            <p>
              Our exterior painting services protect and beautify your
              property's outer surfaces while enhancing curb appeal and property
              value. We specialize in applying weather-resistant coatings that
              stand up to the elements while providing vibrant, lasting color.
            </p>
            <p>
              Before any paint is applied, we thoroughly prepare exterior
              surfaces by power washing, scraping, sanding, and priming as
              needed. Our professional painters use high-quality exterior paints
              specifically formulated for different surface materials and
              weather conditions, ensuring optimal adhesion and durability.
            </p>
          </div>
        </div>
      </section>

      <section className="service-features">
        <h2 className="service-section-title">Our Painting Services Include</h2>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">🏠</div>
            <h3 className="feature-title">Residential Painting</h3>
            <p className="feature-desc">
              Complete interior and exterior painting services for homes of all
              sizes, from single rooms to entire houses, with custom color
              consultations and premium finishes.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏢</div>
            <h3 className="feature-title">Commercial Painting</h3>
            <p className="feature-desc">
              Professional painting solutions for offices, retail spaces,
              restaurants, and other commercial properties with minimal
              disruption to business operations.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Color Consultation</h3>
            <p className="feature-desc">
              Expert advice on color selection and color schemes that complement
              your space, reflect your style preferences, and achieve your
              desired atmosphere.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">Cabinet Refinishing</h3>
            <p className="feature-desc">
              Transform your kitchen or bathroom with professionally refinished
              cabinets, including thorough preparation, priming, and application
              of durable cabinet-grade finishes.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🪟</div>
            <h3 className="feature-title">Trim & Woodwork</h3>
            <p className="feature-desc">
              Precise painting of trim, moldings, wainscoting, doors, and other
              architectural details with specialized techniques for a flawless
              finish on wood surfaces.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🧱</div>
            <h3 className="feature-title">Specialty Finishes</h3>
            <p className="feature-desc">
              Application of decorative finishes such as faux painting, textured
              walls, accent walls, metallic finishes, and other specialty
              techniques to create unique visual interest.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Our Painting Process</h2>
        <div className="service-content">
          <div className="service-text full-width">
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Consultation & Assessment</h3>
                  <p>
                    We begin with a thorough assessment of your space,
                    discussing your goals, preferences, and timeline. Our
                    experts provide professional color consultation and detailed
                    project planning.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Surface Preparation</h3>
                  <p>
                    Proper preparation is essential for a lasting finish. We
                    clean surfaces, repair imperfections, sand rough areas, and
                    apply primer as needed to ensure optimal paint adhesion.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Protection & Setup</h3>
                  <p>
                    We carefully protect your furniture, floors, fixtures, and
                    non-painted surfaces with drop cloths, plastic sheeting, and
                    painter's tape before beginning any paint application.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Expert Paint Application</h3>
                  <p>
                    Our skilled painters apply premium paints using professional
                    techniques for uniform coverage, clean lines, and a flawless
                    finish with the appropriate number of coats.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Inspection & Cleanup</h3>
                  <p>
                    We conduct a detailed inspection to ensure perfect results,
                    make any necessary touch-ups, and thoroughly clean the work
                    area, leaving your space ready to enjoy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Premium Paint Products</h2>
        <div className="service-content image-right">
          <div className="service-text">
            <p>
              We exclusively use high-quality paints from leading manufacturers
              that provide superior coverage, durability, and finish. Our
              selection includes low and zero-VOC options for environmentally
              conscious clients and those with sensitivity to paint odors.
            </p>
            <p>
              Different surfaces and environments require specific paint
              formulations. We carefully select the appropriate products for
              each project, whether it's washable matte finishes for family
              rooms, moisture-resistant paints for bathrooms, or
              weather-resistant exterior coatings for optimal performance and
              longevity.
            </p>
          </div>
          <div className="service-image">
            <img src={painting3} alt="Premium paint products and supplies" />
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2 className="cta-title">Ready to Transform Your Space?</h2>
        <p className="cta-desc">
          Whether you're looking to refresh a single room or completely
          transform your property, our professional painting team is ready to
          deliver exceptional results that exceed your expectations.
        </p>
        <Link to="/contact" className="cta-button">
          Schedule a Painting Consultation
        </Link>
      </div>
    </div>
  );
};

export default Painting;
