import React from "react";
import { Link } from "react-router-dom";
import "./ServicePage.css";
import AcServiceing from "../../images/ACsetup.jpg";
import AcFeeting from "../../images/AcFeeting.jpg";

const AcMaintenance = () => {
  return (
    <div className="service-page">
      <div className="service-page-header">
        <h1 className="service-page-title">AC & HVAC Maintenance Services</h1>
        <p className="service-page-subtitle">
          Keep your home comfortable year-round with our professional AC and
          HVAC maintenance, repair, and installation services delivered by
          certified technicians.
        </p>
      </div>

      <section className="service-section">
        <h2 className="service-section-title">Preventative Maintenance</h2>
        <div className="service-content image-right">
          <div className="service-text">
            <p>
              Regular maintenance is the key to extending the life of your HVAC
              system and ensuring optimal performance. Our comprehensive
              preventative maintenance services include thorough inspection,
              cleaning, and tuning of all components to prevent unexpected
              breakdowns and maintain energy efficiency.
            </p>
            <p>
              Our certified technicians follow a detailed checklist to examine
              refrigerant levels, electrical connections, thermostat accuracy,
              moving parts, condensate drainage, and system controls. We
              recommend seasonal maintenance – typically in spring for air
              conditioning and fall for heating systems – to prepare your
              equipment for peak demand periods.
            </p>
          </div>
          <div className="service-image">
            <img src={AcServiceing} alt="AC maintenance" />
          </div>
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section-title">Repair Services</h2>
        <div className="service-content image-left">
          <div className="service-image">
            <img src={AcFeeting} alt="AC repair" />
          </div>
          <div className="service-text">
            <p>
              When your AC or heating system malfunctions, our rapid response
              repair services minimize discomfort and prevent secondary damage
              to your system. We diagnose and repair all makes and models of air
              conditioners, heat pumps, furnaces, and complete HVAC systems.
            </p>
            <p>
              Our technicians arrive equipped with specialized diagnostic tools
              and common replacement parts to efficiently identify and resolve
              issues during the initial visit whenever possible. We provide
              transparent pricing and detailed explanations of the problem and
              repair options before beginning any work, ensuring you make
              informed decisions about your HVAC system.
            </p>
          </div>
        </div>
      </section>

      <section className="service-features">
        <h2 className="service-section-title">Our HVAC Services Include</h2>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">❄️</div>
            <h3 className="feature-title">AC Installation & Replacement</h3>
            <p className="feature-desc">
              Professional installation of new air conditioning systems and
              replacement of outdated units with energy-efficient models sized
              appropriately for your space.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔥</div>
            <h3 className="feature-title">Heating System Services</h3>
            <p className="feature-desc">
              Maintenance, repair, and installation of furnaces, heat pumps, and
              other heating systems to ensure reliable warmth during colder
              months.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🧹</div>
            <h3 className="feature-title">Duct Cleaning & Sealing</h3>
            <p className="feature-desc">
              Professional cleaning and sealing of ductwork to improve indoor
              air quality, system efficiency, and eliminate contaminants that
              affect health and comfort.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💧</div>
            <h3 className="feature-title">Indoor Air Quality Solutions</h3>
            <p className="feature-desc">
              Installation and maintenance of air purifiers, humidifiers,
              dehumidifiers, and advanced filtration systems to improve the
              quality of your indoor air.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌡️</div>
            <h3 className="feature-title">Thermostat Installation</h3>
            <p className="feature-desc">
              Upgrade to programmable or smart thermostats that provide improved
              temperature control, energy savings, and remote system management
              capabilities.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📋</div>
            <h3 className="feature-title">Maintenance Plans</h3>
            <p className="feature-desc">
              Customized maintenance agreements that include regular system
              check-ups, priority service, and discounts on repairs to keep your
              HVAC system running efficiently.
            </p>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2 className="cta-title">Stay Comfortable Year-Round</h2>
        <p className="cta-desc">
          Whether you need routine maintenance, emergency repairs, or a complete
          system installation, our certified HVAC technicians are ready to
          ensure your comfort in every season.
        </p>
        <Link to="/contact" className="cta-button">
          Schedule HVAC Service
        </Link>
      </div>
    </div>
  );
};

export default AcMaintenance;
