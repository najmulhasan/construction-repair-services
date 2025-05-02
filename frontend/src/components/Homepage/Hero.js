import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// Import our custom CSS
import "./Hero.css";
import electricalService from "../../images/electricalConnection.jpg";
import plumbing from "../../images/PlumbingGizzersetup.jpg";
import ConstructionWork from "../../images/ConstructionRenuvation.jpg";
import painting from "../../images/painting.jpg";
import AcServiceing from "../../images/ACsetup.jpg";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { services } = useAuth();

  const carouselSlides = [
    {
      title: "Electrical Services",
      subtitle: "Professional electrical repairs and installations",
      image: electricalService,
    },

    {
      title: "Plumbing Solutions",
      subtitle: "Expert plumbing services for your home",
      image: plumbing,
    },
    {
      title: "Construction Work",
      subtitle: "Building your dreams with precision and care",
      image: ConstructionWork,
    },
    {
      title: "Professional Painting",
      subtitle: "Transform your space with our painting services",
      image: painting,
    },
    {
      title: "Air Conditioning Service",
      subtitle: "Keep your comfort with our AC maintenance",
      image: AcServiceing,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === carouselSlides.length - 1 ? 0 : prev + 1
    );
  }, [carouselSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    // Filter services based on search query
    const filteredServices = services.filter(
      (service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (service.description &&
          service.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (service.category &&
          service.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Navigate to service page with search query (fixed from /services to /service)
    navigate(`/service?search=${encodeURIComponent(searchQuery)}`, {
      state: { searchResults: filteredServices, searchQuery: searchQuery },
    });
  };

  return (
    <div className="hero-carousel h-[600px] w-full">
      {/* Carousel */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${carouselSlides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Carousel Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
            {carouselSlides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl text-center mb-8">
            {carouselSlides[currentSlide].subtitle}
          </h2>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for services (e.g., plumbing, electrical, painting)"
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="carousel-nav-button prev">
        ←
      </button>
      <button onClick={nextSlide} className="carousel-nav-button next">
        →
      </button>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slide-indicator ${
              currentSlide === index ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
