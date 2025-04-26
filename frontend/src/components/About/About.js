import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { useState } from "react";

const About = () => {
  // Add state for form fields and submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please fill in all fields",
      });
      return;
    }

    try {
      setFormStatus({
        submitting: true,
        success: false,
        error: false,
        message: "Sending message...",
      });

      // Try to send to backend first
      try {
        const response = await fetch(
          "http://localhost:5005/api/contact/submit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // Format data to match what the backend expects
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: "Not provided", // The backend expects this field
              subject: "Message from About page",
              message: formData.message,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setFormStatus({
            submitting: false,
            success: true,
            error: false,
            message: data.message || "Message sent successfully!",
          });
          // Reset form
          setFormData({ name: "", email: "", message: "" });
          return; // Exit early since we successfully sent to backend
        } else {
          // Try to parse error JSON, but handle case where response is not JSON
          try {
            const errorData = await response.json();
            throw new Error(errorData.message || "Server error");
          } catch (jsonError) {
            throw new Error(
              `Server error: ${response.status} ${response.statusText}`
            );
          }
        }
      } catch (fetchError) {
        console.log(
          "Failed to send to backend, using development mode instead:",
          fetchError.message
        );
        // Fall back to development mode if backend fails
        setTimeout(() => {
          console.log("Form submitted (development mode):", formData);
          setFormStatus({
            submitting: false,
            success: true,
            error: false,
            message:
              "Message submitted in development mode. In production, this would be sent to asadservice88@gmail.com",
          });
          setFormData({ name: "", email: "", message: "" });
        }, 1500);
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Failed to send message: ${error.message}`,
      });
      console.error("Error sending message:", error);
    }
  };

  // Timeline data with more accurate milestones
  const timelineData = [
    {
      year: 2010,
      title: "Company Founded",
      description:
        "Our journey began with a small team of passionate professionals dedicated to quality construction and repair services in the local community.",
    },
    {
      year: 2013,
      title: "Expanded Services",
      description:
        "We expanded our range of services to include specialized electrical work, advanced plumbing solutions, and comprehensive HVAC installations.",
    },
    {
      year: 2015,
      title: "Regional Growth",
      description:
        "Our reputation for quality work led to expansion across five major cities in the region, serving over 1,000 satisfied clients.",
    },
    {
      year: 2018,
      title: "Industry Recognition",
      description:
        "Received the Contractor of the Year award and three excellence in service awards from the Regional Construction Association.",
    },
    {
      year: 2020,
      title: "Technology Integration",
      description:
        "Implemented smart diagnostic tools, digital project management, and a customer portal to improve service delivery and client experience.",
    },
    {
      year: 2022,
      title: "Sustainability Commitment",
      description:
        "Launched eco-friendly initiatives including energy-efficient installations, sustainable materials usage, and reduced carbon footprint operations.",
    },
  ];

  // Updated team members data with more relevant information
  const teamMembers = [
    {
      name: "Robert Anderson",
      position: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "With over 25 years of experience in construction and engineering, Robert founded our company with a vision to deliver exceptional quality and service.",
    },
    {
      name: "Maria Martinez",
      position: "Operations Director",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      bio: "Maria brings 15 years of operational expertise, ensuring our projects are delivered on time, within budget, and to the highest standards.",
    },
    {
      name: "David Wilson",
      position: "Technical Director",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      bio: "David oversees all technical aspects of our services, bringing innovative solutions and ensuring compliance with industry standards.",
    },
    {
      name: "Sophia Chen",
      position: "Client Relations Manager",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      bio: "Sophia ensures every client receives personalized attention and maintains our reputation for exceptional customer service.",
    },
  ];

  // Enhanced core values with more meaningful descriptions
  const coreValues = [
    {
      title: "Quality Excellence",
      icon: "🛠️",
      description:
        "We maintain rigorous quality standards in every project, using premium materials and precise craftsmanship to deliver lasting results.",
    },
    {
      title: "Integrity & Trust",
      icon: "🏅",
      description:
        "We operate with complete transparency, providing honest assessments, fair pricing, and fulfilling our commitments without compromise.",
    },
    {
      title: "Client-Centered Approach",
      icon: "👔",
      description:
        "We actively listen to our clients' needs, develop customized solutions, and ensure their complete satisfaction throughout the process.",
    },
    {
      title: "Innovative Solutions",
      icon: "⭐",
      description:
        "We embrace new technologies and methods to offer innovative, efficient, and effective solutions to complex construction challenges.",
    },
    {
      title: "Reliability & Consistency",
      icon: "🛡️",
      description:
        "Our clients can count on us for punctual service, consistent quality, and reliable performance on every project we undertake.",
    },
    {
      title: "Continuous Improvement",
      icon: "🏅",
      description:
        "We invest in ongoing training, education, and development for our team to continually enhance our capabilities and service quality.",
    },
  ];

  // Updated services data with correct, functional links
  const services = [
    {
      icon: "🛠️",
      title: "Professional Plumbing",
      description:
        "Comprehensive plumbing solutions including installation, repair, and maintenance for residential and commercial properties with 24/7 emergency services.",
      link: "/services/plumbing-Service",
    },
    {
      icon: "⚡",
      title: "Electrical Services",
      description:
        "Full-spectrum electrical solutions from rewiring and installations to safety inspections and smart home integrations by certified electricians.",
      link: "/services/Electrical-Service",
    },
    {
      icon: "❄️",
      title: "HVAC Systems",
      description:
        "Complete heating, ventilation, and air conditioning services including installation, maintenance, repairs, and energy efficiency upgrades.",
      link: "/services/AC-Maintenance",
    },
  ];

  // Enhanced contact information with more comprehensive details
  const contactInfo = {
    address: "123 Construction Avenue, Building District, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "info@constructionrepair.com",
    workingHours: {
      weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 4:00 PM",
      sunday: "Sunday: Closed",
    },
    socialMedia: [
      {
        platform: "Facebook",
        icon: "📘",
        link: "https://facebook.com/constructionrepair",
      },
      {
        platform: "Twitter",
        icon: "🐦",
        link: "https://twitter.com/constructionrepair",
      },
      {
        platform: "Instagram",
        icon: "📷",
        link: "https://instagram.com/constructionrepair",
      },
      {
        platform: "LinkedIn",
        icon: "💼",
        link: "https://linkedin.com/company/constructionrepair",
      },
    ],
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content container">
          <h1>About Our Company</h1>
          <p>Building Excellence & Trust Since 2010</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview section">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <div className="separator"></div>
            <p className="section-description">
              Discover how we became industry leaders in construction and repair
              services.
            </p>
          </div>
          <div className="two-column">
            <div>
              <p className="lead-text">
                Since 2010, we've built our reputation on delivering exceptional
                construction and repair services to residential and commercial
                clients nationwide. What began as a small team with a big vision
                has evolved into a comprehensive service provider renowned for
                excellence.
              </p>
              <p>
                Our unwavering commitment to quality workmanship, customer
                satisfaction, and innovative solutions has earned us the trust
                of thousands of clients and recognition throughout the industry.
                We blend traditional craftsmanship with cutting-edge techniques
                to achieve results that consistently exceed expectations.
              </p>
              <p>
                Today, we continue to innovate and expand while staying true to
                our founding principles and dedication to exceptional service.
                Our team of certified professionals approaches each project with
                meticulous attention to detail and a commitment to delivering
                lasting quality.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3"
                alt="Construction team working together"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="container">
          <div className="section-header">
            <h2>Mission & Vision</h2>
            <div className="separator"></div>
            <p className="section-description">
              The principles that guide our work and shape our future goals.
            </p>
          </div>
          <div className="two-column">
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>
                To provide exceptional construction and repair services that
                enhance the comfort, safety, functionality, and value of our
                clients' properties through skilled craftsmanship, premium
                materials, and unparalleled customer service.
              </p>
            </div>
            <div className="vision-box">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted name in construction and repair services,
                recognized industry-wide for integrity, innovation, and
                excellence, while creating sustainable solutions that positively
                impact communities and set new standards for the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="history section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <div className="separator"></div>
            <p className="section-description">
              Key milestones that have shaped our growth and evolution over the
              years.
            </p>
          </div>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>
                    {item.year}: {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="separator"></div>
            <p className="section-description">
              The fundamental principles that drive our decisions and actions
              every day.
            </p>
          </div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div className="value-card" key={index}>
                <span
                  className="value-icon"
                  style={{ fontSize: "3rem", color: "#3b82f6" }}
                >
                  {value.icon}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <div className="separator"></div>
            <p className="section-description">
              Meet the experienced professionals who guide our company with
              expertise and vision.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview with functional links */}
      <section className="services-overview section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <div className="separator"></div>
            <p className="section-description">
              Professional construction and repair solutions tailored to your
              specific needs.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service" key={index}>
                <span
                  className="service-icon"
                  style={{
                    fontSize: "2.5rem",
                    color: "#3b82f6",
                    display: "block",
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/services" className="btn primary-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Add Contact Information Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="mr-3 text-blue-500">📍</span>
                  <span>{contactInfo.address}</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-blue-500">📞</span>
                  <span>{contactInfo.phone}</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-blue-500">📧</span>
                  <span>{contactInfo.email}</span>
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-4">Working Hours</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-3 text-blue-500">🕒</span>
                  <span>{contactInfo.workingHours.weekdays}</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-blue-500">🕒</span>
                  <span>{contactInfo.workingHours.saturday}</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-blue-500">🕒</span>
                  <span>{contactInfo.workingHours.sunday}</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                {formStatus.message && (
                  <div
                    className={`text-sm p-2 rounded ${
                      formStatus.success
                        ? "bg-green-100 text-green-700"
                        : formStatus.error
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ${
                    formStatus.submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              <h3 className="text-xl font-semibold mt-6 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {contactInfo.socialMedia.map((social, index) => (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    aria-label={`Follow us on ${social.platform}`}
                    className="text-blue-600 hover:text-blue-800 text-2xl"
                  >
                    <span style={{ fontSize: "1.5rem" }}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Contact us today for a free consultation and detailed quote on your
            construction or repair needs.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary-btn">
              Contact Us
            </Link>
            <Link to="/services" className="btn secondary-btn">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
