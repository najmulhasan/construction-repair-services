import React, { useState } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Essential Electrical Safety Tips for Homeowners",
      excerpt:
        "Learn about crucial electrical safety measures to protect your home and family from potential hazards.",
      content:
        "Electricity is the backbone of modern living, but it comes with inherent risks. This comprehensive guide covers essential safety measures every homeowner should implement. Learn how to identify overloaded circuits, the importance of GFCI outlets in wet areas, and when to call a professional electrician. We'll also discuss common warning signs of electrical problems, including flickering lights, warm outlets, and frequent circuit breaker trips. Proper maintenance of your electrical system not only ensures safety but can also help reduce energy costs and extend the lifespan of your appliances. Discover how regular inspections can prevent major issues and keep your home safe from electrical fires.",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3",
      date: "April 15, 2024",
      category: "Electrical",
    },
    {
      id: 2,
      title: "DIY Plumbing Repairs Every Homeowner Should Know",
      excerpt:
        "Master basic plumbing skills to handle common household issues without calling a professional.",
      content:
        "While some plumbing problems require professional expertise, many common issues can be resolved with basic tools and knowledge. This guide walks you through resolving clogged drains using natural solutions before resorting to harsh chemicals. Learn how to properly use a plunger and snake for different types of clogs. We cover step-by-step instructions for fixing leaky faucets, running toilets, and replacing simple fixtures. You'll also learn how to identify more serious issues that require professional attention. Proper maintenance tips are included to help prevent future problems, such as avoiding grease disposal down drains and using drain strainers. With these skills, you can save money on service calls and address minor issues before they become major problems.",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3",
      date: "April 10, 2024",
      category: "Plumbing",
    },
    {
      id: 3,
      title: "Maximizing AC Efficiency: Maintenance Tips for Hot Summers",
      excerpt:
        "Keep your air conditioning system running efficiently with these essential maintenance practices.",
      content:
        "As temperatures rise, your air conditioning system works overtime to keep your home comfortable. This guide provides comprehensive maintenance tips to ensure optimal performance and efficiency. Learn the importance of regular filter cleaning and replacement, which can reduce energy consumption by 5-15%. We explain how to safely clean condenser coils and remove debris from outdoor units. Proper thermostat settings and programming can further reduce costs while maintaining comfort. The article includes a seasonal maintenance checklist and signs that indicate when professional servicing is needed. You'll also discover how ceiling fans and proper insulation can complement your AC system and reduce the cooling load. Following these maintenance tips can extend your system's lifespan by years and significantly reduce repair costs.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3",
      date: "April 5, 2024",
      category: "AC Maintenance",
    },
    {
      id: 4,
      title: "Modern Construction Techniques Transforming Home Building",
      excerpt:
        "Explore cutting-edge construction methods that are revolutionizing residential building projects.",
      content:
        "The construction industry is evolving rapidly with innovative techniques that improve efficiency, sustainability, and durability. This article explores modern methods that are changing how homes are built, including modular and prefabricated construction that can reduce building time by up to 50%. We discuss the benefits of ICF (Insulated Concrete Forms) and SIPs (Structural Insulated Panels) for superior insulation and strength. The integration of smart home technology during the construction phase rather than retrofitting is becoming standard practice. Sustainable building materials like bamboo flooring, recycled steel, and low-VOC paints are highlighted for their environmental benefits. We also cover how 3D printing technology is beginning to impact residential construction, with the potential to dramatically reduce labor costs and construction waste in the coming years.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3",
      date: "March 30, 2024",
      category: "Construction",
    },
    {
      id: 5,
      title: "Smart Home Electrical Upgrades Worth Investing In",
      excerpt:
        "Discover electrical improvements that add convenience, efficiency, and value to your home.",
      content:
        "Smart home technology has moved beyond novelty to practical applications that improve daily living. This comprehensive guide covers the most valuable electrical upgrades for modern homes, starting with smart lighting systems that can reduce energy usage by up to 25%. We explore whole-home surge protection as an essential safeguard for your increasingly connected devices. Integrated USB outlets eliminate adapter clutter while providing convenient charging stations throughout your home. Automated whole-house backup generators offer peace of mind during power outages, protecting both comfort and critical systems. The article includes cost estimates for each upgrade and potential return on investment when selling your home. We also discuss the importance of professional installation for complex systems and how to choose qualified electricians for these specialized upgrades.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055e2e28ed0?ixlib=rb-4.0.3",
      date: "March 25, 2024",
      category: "Electrical",
    },
    {
      id: 6,
      title:
        "Water-Saving Plumbing Fixtures: The Environmental and Financial Benefits",
      excerpt:
        "Learn how upgrading your plumbing fixtures can reduce water consumption and utility bills.",
      content:
        "Water conservation is increasingly important, and modern plumbing fixtures offer impressive savings without sacrificing performance. This detailed article examines how low-flow toilets can save up to 16,500 gallons of water annually per household compared to older models. High-efficiency faucets and aerators can reduce water usage by 30% while maintaining satisfactory pressure. We provide comparisons of different shower systems, including rainfall showers versus water-saving models, and their impact on both experience and consumption. Smart water monitors that detect leaks and track usage patterns are highlighted as emerging technology worth considering. The guide includes installation complexity ratings and whether professional plumbing help is recommended for each upgrade. With potential water bill savings of 25-30%, these fixtures often pay for themselves within 1-2 years while contributing to environmental conservation efforts.",
      image:
        "https://images.unsplash.com/photo-1611021061285-16c871740540?ixlib=rb-4.0.3",
      date: "March 20, 2024",
      category: "Plumbing",
    },
    {
      id: 7,
      title: "Seasonal AC Maintenance: Preparing for Extreme Weather",
      excerpt:
        "Ensure your air conditioning system is ready for seasonal challenges with this preventative maintenance guide.",
      content:
        "Your air conditioning system faces different challenges throughout the year, and proper seasonal maintenance is crucial for optimal performance. This comprehensive guide outlines specific tasks for each season, starting with spring preparation before heavy use begins. Summer maintenance focuses on monitoring performance during peak demand periods, while fall procedures prepare the system for reduced use. Winter maintenance ensures the system remains protected during dormant periods. We provide detailed instructions for condensate drain cleaning to prevent water damage and mold growth. The article explains how proper refrigerant levels impact efficiency and system longevity, and what professional checks should include. For homeowners in coastal areas, we cover additional maintenance requirements to protect against salt air corrosion. Following this seasonal approach extends system life and prevents costly emergency repairs during extreme weather events.",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3",
      date: "March 15, 2024",
      category: "AC Maintenance",
    },
    {
      id: 8,
      title: "Home Foundation Types: Pros and Cons for New Construction",
      excerpt:
        "Understand the different foundation options available for residential construction projects.",
      content:
        "The foundation is literally what your home stands on, making it one of the most critical construction decisions. This in-depth article compares different foundation types, including slab-on-grade foundations that offer cost savings and faster construction timelines. Crawl space foundations provide easier access to utilities but come with ventilation and moisture considerations. Full basements add valuable living space but represent a significant cost increase. We discuss how soil types, regional climates, and floodplain locations impact foundation selection. The guide includes comparisons of concrete versus preserved wood foundations in appropriate settings. Particular attention is given to insulation requirements for each foundation type and how they impact long-term energy costs. For renovations and additions, we examine the challenges of matching or extending existing foundations and when alternative approaches may be necessary. Understanding these options helps homeowners make informed decisions that balance immediate costs with long-term structural integrity.",
      image:
        "https://images.unsplash.com/photo-1621905252141-78417cd4d14c?ixlib=rb-4.0.3",
      date: "March 10, 2024",
      category: "Construction",
    },
    {
      id: 9,
      title: "A Guide to Choosing the Right Electrical Panel for Your Home",
      excerpt:
        "Discover the factors to consider when selecting the right electrical panel for your home.",
    },
  ];

  const openBlogDetail = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="blogs-container">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button
                  className="read-more-btn"
                  onClick={() => openBlogDetail(post)}
                >
                  Read More Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      {showModal && selectedBlog && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedBlog.title}</h2>
              <button className="close-modal" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>
              <div className="modal-meta">
                <span className="modal-category">{selectedBlog.category}</span>
                <span className="modal-date">{selectedBlog.date}</span>
              </div>
              <div className="modal-content">
                <p>{selectedBlog.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
