import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './HandsAndFeet.css'; // Importing the CSS file

const HandsFeet = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: 'Manicure',
      items: [
        { name: 'Cuticle Care' },
        { name: 'Nail Shaping' },
        { name: 'Polish Application' },
        { name: 'French Manicure' }
      ]
    },
    {
      title: 'Pedicure',
      items: [
        { name: 'Exfoliation' },
        { name: 'Massage' },
        { name: 'Foot Mask' },
        { name: 'Nail Polish' }
      ]
    },
    {
      title: 'Nail Art',
      items: [
        { name: 'Designs & Patterns' },
        { name: 'Rhinestones' },
        { name: 'Glitter Art' }
      ]
    }
  ];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="container" id="hands-feet-container">
      {/* Image Section */}
      <div className="image-section" id="hands-feet-image-section">
        <img
          src="hand.jpg"
          alt="Hands and Feet treatments"
          className="image"
          id="hands-feet-image"
        />
        {/* Quote Below Image */}
        <blockquote className="quote" id="hands-feet-quote">
          "Pamper your hands and feet, they deserve it."
        </blockquote>
      </div>

      {/* Services Section */}
      <div className="services-section" id="hands-feet-services-section">
        <h3 className="services-title" id="hands-feet-services-title">Hands & Feet Services</h3>
        <div className="services-list" id="hands-feet-services-list">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-item"
              id={`service-item-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <button
                onClick={() => toggleSection(service.title)}
                className="service-header"
                id={`service-header-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                aria-expanded={expandedSection === service.title}
                aria-controls={`service-details-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <span id={`service-title-${service.title.replace(/\s+/g, '-').toLowerCase()}`}>{service.title}</span>
                {expandedSection === service.title ? (
                  <ChevronUp className="icon" id={`chevron-up-${service.title.replace(/\s+/g, '-').toLowerCase()}`} />
                ) : (
                  <ChevronDown className="icon" id={`chevron-down-${service.title.replace(/\s+/g, '-').toLowerCase()}`} />
                )}
              </button>
              {expandedSection === service.title && service.items && (
                <div
                  className="service-details"
                  id={`service-details-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <ul id={`service-items-list-${service.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    {service.items.map((item) => (
                      <li key={item.name} id={`service-item-${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandsFeet;
