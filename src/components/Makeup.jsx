import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Makeup.css'; // Importing the CSS file

const Makeup = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: 'Makeup Services',
      items: [
        { name: 'Trend and Side Dressing' },
        { name: 'Bridal', link: '/bridal' },
        { name: 'Spot Makeup Services' },
        { name: 'All Makeup Services' }
      ]
    }
  ];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="container" id="makeup-services-container">
      {/* Image Section */}
      <div className="image-section" id="makeup-image-section">
        <img
          src="makeup1.jpg"
          alt="Makeup services"
          className="image"
          id="makeup-image"
        />
        {/* Quote Below Image */}
        <blockquote className="quote" id="makeup-quote">
          "Makeup is the art of enhancing your natural beauty."
        </blockquote>
      </div>

      {/* Services Section */}
      <div className="services-section" id="makeup-services-section">
        <h3 className="services-title" id="makeup-services-title">Makeup Services</h3>
        <div className="services-list" id="makeup-services-list">
          {services.map((service) => (
            <div key={service.title} className="service-item" id={`service-item-${service.title.replace(/\s+/g, '-').toLowerCase()}`}>
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
                <div className="service-details" id={`service-details-${service.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  <ul id={`service-items-list-${service.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    {service.items.map((item) => (
                      <li key={item.name} id={`service-item-${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
                        <a href={item.link} className="service-link" id={`service-link-${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
                          {item.name}
                        </a>
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

export default Makeup;
