import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Makeup.css'; // Importing the CSS file

const Makeup = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: 'Makeup Services',
      items: [
        {
          name: 'Trend and Side Dressing',
          description: 'A trendy makeup style with focus on side dressing, perfect for modern events.'
        },
        {
          name: 'Bridal',
          description: 'Exclusive makeup services for brides, ensuring a flawless look on the big day.'
        },
        {
          name: 'Spot Makeup Services',
          description: 'Quick makeup services for any spot touch-ups or specific areas of focus.'
        },
        {
          name: 'All Makeup Services',
          description: 'Complete makeup services covering all aspects from face to styling for any occasion.'
        }
      ]
    }
  ];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div>
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
                        <span
                          className="service-link"
                          id={`service-link-${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                          onClick={() => {
                            if (item.link) {
                              window.location.href = item.link; // Redirects to the link
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && item.link) {
                              window.location.href = item.link;
                            }
                          }}
                        >
                          <strong>{item.name}:</strong> {item.description}
                        </span>
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
    <div className="makeup-care-conntainer">
        <div className="makeupcare-container">
          <h1>Makeup Tips</h1>
          <p>
          Start with a clean, moisturized face and apply a primer to create a smooth base. 
          Choose a foundation that matches your skin tone and use concealer to cover blemishes and dark circles. 
          Fill in your eyebrows with a pencil or powder and set them with a gel. For eyes, 
          go for neutral eyeshadows for a natural look, and add eyeliner and mascara for definition. 
          Use contour to define your face and a highlighter to add a glow.
           Apply blush to your cheeks for a fresh look. Finish with lip liner, lipstick, or gloss.
            Set your makeup with a spray or powder, and always remove makeup before bed. 
            Stay hydrated and protect your skin with SPF.         </p>
        </div>
        <div className="image-container">
          <img
            src="makeup2.jpg"
            className="mainsection"
            alt="skincare"
          />
        </div>
      </div>
      <div className="color-container">
      <img
        src="makeup_p.jpg"
        className="mainsection"
        alt="Relaxing spa environment"
      />
      <div className="content">
      <h1>Makeup Products</h1>
      <p>
      Makeup products are essential tools for enhancing your natural beauty and creating a variety of looks. From foundation that provides coverage and evens out skin tone, to concealer that helps cover blemishes and dark circles, these products work together to create a flawless base. Blush, bronzer, and highlighter add color and dimension to the face, while eyeshadow, eyeliner, and mascara define the eyes. Eyebrow products shape and frame the brows, and lip products like lipstick and lip gloss finish off the look. Whether you prefer a natural or dramatic style, makeup products allow you to express yourself and highlight your features with ease.
      </p>

      </div>
    </div>
    <div class="product-container">
  <div class="text-container">
    <h1>Bridal  Makeup</h1>
    <p>
    Bridal makeup is a crucial part of a bride's look on her special day, designed to enhance her natural beauty and ensure she looks flawless throughout the event. Bridal makeup typically focuses on creating a long-lasting, radiant finish that withstands the emotional and physical demands of the day. It includes a flawless base with foundation, concealer, and setting powder, along with soft yet defined eyes, sculpted brows, and a perfect lip color. The goal is to create a timeless look that complements the bride’s personality, dress, and overall wedding theme, while ensuring she feels confident and beautiful from the ceremony to the reception.</p>
  </div>
  <div>
    <img src="bridal1.jpg" class="mainsection" alt="Natural skincare products on display" />
  </div>
</div>
  </div>
  );
};

export default Makeup;
