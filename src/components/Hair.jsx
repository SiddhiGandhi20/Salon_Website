import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Hair.css'; // Importing the CSS file

const Hair = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: 'Haircut',
      items: [
        { name: 'Layered Cut' },
        { name: 'V-Cut' },
        { name: 'Curtain Bangs' },
        { name: 'Side Swept Bangs' },
        { name: 'Fringe/Bangs' }
      ]
    },
    {
      title: 'Hair Color',
      items: [
        { name: 'Root Touch-Up' },
        { name: 'Full Color' },
        { name: 'Highlights' },
        { name: 'Balayage' }
      ]
    },
    {
      title: 'Hair Treatments',
      items: [
        { name: 'Deep Conditioning' },
        { name: 'Keratin Treatment' },
        { name: 'Scalp Treatment' },
        { name: 'Hair Spa' }
      ]
    },
    {
      title: 'Styling',
      items: [
        { name: 'Blow Dry' },
        { name: 'Curls & Waves' },
        { name: 'Straightening' },
        { name: 'Updo Style' }
      ]
    },
    {
      title: 'Texture',
      items: [
        { name: 'Texturizing' },
        { name: 'Perming' },
        { name: 'Relaxing' },
        { name: 'Volume Treatment' }
      ]
    }
  ];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="container" id="hair-services-container">
      {/* Image Section */}
      <div className="image-section" id="hair-image-section">
        <img
          src="hair2.jpg"
          alt="Hair treatment styling"
          className="image"
          id="hair-image"
        />
        {/* Quote Below Image */}
        <blockquote className="quote" id="hair-quote">
          "Good hair speaks louder than words."
        </blockquote>
      </div>

      {/* Services Section */}
      <div className="services-section" id="hair-services-section">
        <h3 className="services-title" id="hair-services-title">Hair Services</h3>
        <div className="services-list" id="hair-services-list">
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

export default Hair;
