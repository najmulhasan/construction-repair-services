import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // Define the API endpoint URL once to avoid duplication
  const API_ENDPOINT = "http://localhost:5005/api/contact/submit";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [callbackData, setCallbackData] = useState({
    name: "",
    phone: "",
    preferredTime: "morning",
  });

  const [activeTab, setActiveTab] = useState("message");
  const [errors, setErrors] = useState({});
  const [callbackErrors, setCallbackErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
  const [errorDetails, setErrorDetails] = useState("");
  const [callbackStatus, setCallbackStatus] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const validateCallbackForm = () => {
    const newErrors = {};
    if (!callbackData.name.trim()) newErrors.name = "Name is required";
    if (!callbackData.phone.trim())
      newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCallbackChange = (e) => {
    const { name, value } = e.target;
    setCallbackData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setSubmitStatus("sending");
      setErrorDetails("");
      try {
        console.log("About to fetch with URL:", API_ENDPOINT);
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log("Response status:", response.status);

        // Handle network errors
        if (!response.ok) {
          const data = await response.json().catch(() => ({
            message: `Server responded with status ${response.status}`,
          }));
          throw new Error(data.message || "Failed to send message");
        }

        const data = await response.json();
        console.log("Response data:", data);

        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");

        // Provide more specific error messages
        if (error.message === "Failed to fetch") {
          setErrorDetails(
            "Cannot connect to the server. Please make sure the backend server is running."
          );
        } else {
          setErrorDetails(
            error.message ||
              "Network error. Please check if the server is running."
          );
        }
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleCallbackRequest = async (e) => {
    e.preventDefault();
    const formErrors = validateCallbackForm();

    if (Object.keys(formErrors).length === 0) {
      setCallbackStatus("sending");
      try {
        // For callback requests, we can use the same endpoint but with a different subject
        const callbackRequestData = {
          name: callbackData.name,
          phone: callbackData.phone,
          email: "callback@request.com", // Provide a valid email format since it's required by the backend
          subject: "Callback Request",
          message: `Please call back ${callbackData.name} at ${callbackData.phone}. Preferred time: ${callbackData.preferredTime}.`,
        };

        console.log("Submitting callback request to:", API_ENDPOINT);
        console.log("Request data:", callbackRequestData);

        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(callbackRequestData),
        });

        console.log("Callback response status:", response.status);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({
            message: `Server responded with status ${response.status}`,
          }));
          throw new Error(
            errorData.message || "Failed to send callback request"
          );
        }

        const data = await response.json();
        console.log("Callback response data:", data);

        setCallbackStatus("success");
        setCallbackData({
          name: "",
          phone: "",
          preferredTime: "morning",
        });
      } catch (error) {
        console.error("Error submitting callback request:", error);
        setCallbackStatus("error");

        // Provide more helpful error messages based on the error type
        if (error.message === "Failed to fetch") {
          alert(
            "Cannot connect to the server. Please check if the backend is running on port 5005."
          );
        } else {
          alert(
            `Error: ${
              error.message || "Unknown error occurred during callback request"
            }`
          );
        }
      }
    } else {
      setCallbackErrors(formErrors);
    }
  };

  // Direct contact methods
  const handleDirectCall = () => {
    window.location.href = "tel:+6586187859";
  };

  const handleDirectEmail = () => {
    window.location.href = "mailto:asadzzaman933@gmail.com";
  };

  const handleWhatsAppContact = () => {
    // Open WhatsApp with a pre-filled message
    const phoneNumber = "+6586187859"; // Without the + sign
    const message =
      "Hello, I would like to inquire about your construction services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries or support</p>
      </div>

      <div className="quick-contact-buttons">
        <button className="quick-contact-btn call" onClick={handleDirectCall}>
          <i className="fas fa-phone"></i> Call Us Now
        </button>
        <button className="quick-contact-btn email" onClick={handleDirectEmail}>
          <i className="fas fa-envelope"></i> Email Us
        </button>
        <button
          className="quick-contact-btn whatsapp"
          onClick={handleWhatsAppContact}
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </button>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Address</h3>
              <p>Jalan Street Singapore</p>
              <p>Singapore</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+6586187859‬</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>asadzzaman933@gmail.com </p>
              <p>asadservice88@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="contact-tabs">
            <button
              className={`tab-btn ${activeTab === "message" ? "active" : ""}`}
              onClick={() => setActiveTab("message")}
            >
              Send Message
            </button>
            <button
              className={`tab-btn ${activeTab === "callback" ? "active" : ""}`}
              onClick={() => setActiveTab("callback")}
            >
              Request Callback
            </button>
          </div>

          {activeTab === "message" && (
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error" : ""}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                    placeholder="Service Inquiry"
                  />
                  {errors.subject && (
                    <span className="error-message">{errors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={`submit-button ${submitStatus}`}
                  disabled={submitStatus === "sending"}
                >
                  {submitStatus === "sending" ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="success-message">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="error-message">
                    Sorry, there was an error sending your message:{" "}
                    {errorDetails}
                  </div>
                )}
              </form>
            </div>
          )}

          {activeTab === "callback" && (
            <div className="callback-form">
              <h2>Request a Callback</h2>
              <p>
                Leave your details and we'll call you back at your preferred
                time.
              </p>
              <form onSubmit={handleCallbackRequest}>
                <div className="form-group">
                  <label htmlFor="callback-name">Your Name</label>
                  <input
                    type="text"
                    id="callback-name"
                    name="name"
                    value={callbackData.name}
                    onChange={handleCallbackChange}
                    className={callbackErrors.name ? "error" : ""}
                    placeholder="John Doe"
                  />
                  {callbackErrors.name && (
                    <span className="error-message">{callbackErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="callback-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="callback-phone"
                    name="phone"
                    value={callbackData.phone}
                    onChange={handleCallbackChange}
                    className={callbackErrors.phone ? "error" : ""}
                    placeholder="(555) 123-4567"
                  />
                  {callbackErrors.phone && (
                    <span className="error-message">
                      {callbackErrors.phone}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="preferred-time">Preferred Time</label>
                  <select
                    id="preferred-time"
                    name="preferredTime"
                    value={callbackData.preferredTime}
                    onChange={handleCallbackChange}
                  >
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 6PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className={`submit-button ${callbackStatus}`}
                  disabled={callbackStatus === "sending"}
                >
                  {callbackStatus === "sending"
                    ? "Submitting..."
                    : "Request Callback"}
                </button>

                {callbackStatus === "success" && (
                  <div className="success-message">
                    Your callback request has been received! We'll call you at
                    your preferred time.
                  </div>
                )}

                {callbackStatus === "error" && (
                  <div className="error-message">
                    Sorry, there was an error submitting your callback request.
                    Please try again.
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
