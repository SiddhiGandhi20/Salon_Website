import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Skin.css'; // Importing the CSS file

const Skin = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: 'Waxing',
      items: ['Full Face', 'Eyebrows', 'Upper Lip', 'Full Body']
    },
    {
      title: 'Threading',
      items: ['Eyebrows', 'Upper Lip', 'Full Face', 'Chin']
    },
    {
      title: 'Facial',
      items: ['Deep Cleansing', 'Anti-Aging', 'Brightening', 'Hydrating']
    },
    {
      title: 'Mask',
      items: ['Clay Mask', 'Sheet Mask', 'Peel-Off Mask', 'Hydrating Mask']
    },
    {
      title: 'Spa',
      items: ['Relaxation Spa', 'Aromatherapy Spa', 'Detox Spa']
    }
  ];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="container">
      {/* Image Section */}
      <div className="image-section">
        <img
          src="skin.jpg"
          alt="Skin treatment facial mask being applied"
          className="image"
        />
        {/* Quote Below Image */}
        <blockquote className="quote">
          "Healthy skin is a reflection of overall wellness."
        </blockquote>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h3 className="services-title">Skin Services</h3>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.title} className="service-item">
              <button
                onClick={() => toggleSection(service.title)}
                className="service-header"
              >
                <span>{service.title}</span>
                {expandedSection === service.title ? (
                  <ChevronUp className="icon" />
                ) : (
                  <ChevronDown className="icon" />
                )}
              </button>
              {expandedSection === service.title && service.items && (
                <div className="service-details">
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
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

export default Skin;
