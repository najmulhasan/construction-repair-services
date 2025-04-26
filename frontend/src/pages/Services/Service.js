import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ServiceCard from "../../components/Service/ServiceCard";
import SEO from "../../components/SEO/SEO";

const Service = () => {
  const { categories, services } = useAuth();
  const location = useLocation();
  const [filteredServices, setFilteredServices] = useState([]);
  const [isSearchResults, setIsSearchResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search");

    if (query) {
      setIsSearchResults(true);
      setSearchQuery(query);

      // Use passed in search results if available
      if (location.state && location.state.searchResults) {
        setFilteredServices(location.state.searchResults);
      } else {
        // Fallback to filtering services if no state was passed
        const results = services.filter(
          (service) =>
            service.name.toLowerCase().includes(query.toLowerCase()) ||
            (service.description &&
              service.description
                .toLowerCase()
                .includes(query.toLowerCase())) ||
            (service.category &&
              service.category.toLowerCase().includes(query.toLowerCase()))
        );
        setFilteredServices(results);
      }
    } else {
      setIsSearchResults(false);
      setSearchQuery("");
    }
  }, [location.search, location.state, services]);

  // Prepare SEO metadata
  const title = isSearchResults
    ? `Search Results for "${searchQuery}" | Services`
    : "Professional Construction & Repair Services in Singapore";

  const description = isSearchResults
    ? `Browse our Singapore services matching "${searchQuery}". Professional construction and repair solutions including plumbing, electrical, painting, and more.`
    : "Comprehensive construction and repair services in Singapore. Expert solutions for residential and commercial properties including plumbing, electrical, painting, AC repair, and renovation services.";

  const keywords = [
    "construction services Singapore",
    "repair services Singapore",
    "home improvement Singapore",
    "professional contractors SG",
    "building maintenance Singapore",
  ];

  return (
    <div>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl="https://yourwebsite.com.sg/service"
      />

      <div className="container mx-auto p-2">
        {isSearchResults ? (
          <>
            <h1 className="text-3xl mt-5 font-bold">Search Results</h1>
            <p className="text-lg mt-2 mb-4">
              Showing results for:{" "}
              <span className="font-semibold">"{searchQuery}"</span>
            </p>
            <div className="my-10">
              {filteredServices.length > 0 ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                  ))}
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                  <p className="text-xl text-yellow-700">
                    No services found matching your search for "{searchQuery}".
                  </p>
                  <p className="mt-2 text-yellow-600">
                    Try a different search term or browse our categories below.
                  </p>
                </div>
              )}
            </div>
            <h2 className="text-2xl mt-10 mb-5 font-bold">All Services</h2>
          </>
        ) : (
          <h1 className="text-3xl mt-5 font-bold">All Services</h1>
        )}

        {/* Show a message if no services are available at all */}
        {services.length === 0 && (
          <p className="text-lg my-8">
            Loading services... If no services appear, please try refreshing the
            page.
          </p>
        )}

        {categories.map((category) => {
          const categoryServices = services.filter(
            (service) => service.category === category.name
          );

          return categoryServices.length > 0 ? (
            <div key={category._id} className="my-20">
              <div className="w-full">
                <h2 className="my-5 text-2xl font-bold">{category.name}</h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {categoryServices.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                  ))}
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Service;
