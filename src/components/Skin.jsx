import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Skin.css'; // Importing the CSS file

const Skin = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: 'Waxing',
      description: 'Waxing removes hair from the root, ensuring smooth and long-lasting results.',
      items: [
        { name: 'Full Face', description: 'Removes hair from the entire face for a smooth finish.' },
        { name: 'Eyebrows', description: 'Defines and shapes eyebrows by removing unwanted hair.' },
        { name: 'Upper Lip', description: 'Removes hair from the upper lip area for a clean look.' },
        { name: 'Full Body', description: 'Covers waxing for the entire body for smooth skin.' }
      ]
    },
    {
      title: 'Threading',
      description: 'Threading is a method of hair removal using a twisted thread to pluck hair from the root, perfect for sensitive skin.',
      items: [
        { name: 'Eyebrows', description: 'Shape and define your eyebrows with precision threading.' },
        { name: 'Upper Lip', description: 'Remove unwanted hair from the upper lip area.' },
        { name: 'Full Face', description: 'Threading for the entire face to remove fine hair.' },
        { name: 'Chin', description: 'Remove hair from the chin area for a smooth finish.' }
      ]
    },
    {
      title: 'Facial',
      description: 'Facials rejuvenate the skin by removing dead skin cells, improving texture, and promoting a healthy glow.',
      items: [
        { name: 'Deep Cleansing', description: 'Cleanses deep into the pores to remove impurities and toxins.' },
        { name: 'Anti-Aging', description: 'Targets fine lines and wrinkles, promoting youthful skin.' },
        { name: 'Brightening', description: 'Helps in lightening dark spots and evening out skin tone.' },
        { name: 'Hydrating', description: 'Restores moisture to the skin, making it plump and glowing.' }
      ]
    },
    {
      title: 'Mask',
      description: 'Facial masks provide deep hydration, detoxification, and other skin benefits based on the type of mask.',
      items: [
        { name: 'Clay Mask', description: 'Helps to draw out impurities and excess oil from the skin.' },
        { name: 'Sheet Mask', description: 'Pre-infused with ingredients to hydrate and nourish the skin.' },
        { name: 'Peel-Off Mask', description: 'Peels off easily, removing dead skin cells and impurities.' },
        { name: 'Hydrating Mask', description: 'Delivers deep hydration to dry and dull skin.' }
      ]
    },
    {
      title: 'Spa',
      description: 'Spa treatments are designed to relieve stress and promote relaxation, offering a variety of therapies.',
      items: [
        { name: 'Relaxation Spa', description: 'A calming treatment to relax the mind and body.' },
        { name: 'Aromatherapy Spa', description: 'Uses essential oils to enhance physical and mental wellness.' },
        { name: 'Detox Spa', description: 'A detoxifying treatment that helps to cleanse the body and skin.' }
      ]
    }
  ];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div>
      {/* Main Container */}
      <div className="skin-container">
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
                {expandedSection === service.title && (
                  <div className="service-details">
                    <p className="service-description">{service.description}</p>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item.name}>
                          <strong>{item.name}:</strong> {item.description}
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

      {/* Skin-Care Container */}
      <div className="skin-care-conntainer">
        <div className="skincare-container">
          <h1>Skin Care Tips</h1>
          <p>
          Healthy, glowing skin starts with a consistent skincare routine. Begin by cleansing your face twice daily to remove dirt, oil, and impurities. Follow up with a toner to restore your skin's pH balance and a moisturizer to lock in hydration. Sunscreen is a must every morning, even on cloudy days, to protect your skin from harmful UV rays that cause premature aging and dark spots. Exfoliate once or twice a week to remove dead skin cells, but avoid over-exfoliating as it can irritate your skin. Hydration is key—drink plenty of water throughout the day to keep your skin plump and radiant. Incorporate a serum that targets specific concerns, such as vitamin C for brightening or hyaluronic acid for hydration. Never skip removing makeup before bed, as it can clog pores and lead to breakouts. Regularly pamper your skin with masks or facials to boost its health and vitality. Finally, always listen to your skin’s needs and choose products suited to your skin type, whether oily, dry, sensitive, or combination.
          </p>
        </div>
        <div className="image-container">
          <img
            src="skincare.jpg"
            className="mainsection"
            alt="skincare"
          />
        </div>
      </div>
      <div className="spa-container">
      <img
        src="spa.jpg"
        className="mainsection"
        alt="Relaxing spa environment"
      />
      <div className="content">
        <h1>Glow Like Never Before</h1>
        <p>
          Our signature treatments combine advanced skincare technology with
          organic ingredients to ensure a radiant, youthful glow. Whether
          you're preparing for a special occasion or simply treating yourself,
          our range of facials, masks, and body scrubs are tailored to meet
          your unique needs. Relax in our serene environment while our
          experts work their magic.
        </p>
      </div>
    </div>


    <div class="product-container">
  <div class="text-container">
    <h1>Healthy Skin Starts Here</h1>
    <p>
    At our salon, we believe in promoting skin health with a holistic approach.
    Our experts provide consultations to understand your skin's needs and recommend personalized regimens for care and maintenance.
    Experience the perfect blend of nature and innovation with our products and services. 
    We focus on nourishing your skin from the inside out, using only the highest quality,
    natural ingredients combined with advanced technology to enhance your skin’s health. 
    Whether you’re looking to rejuvenate, hydrate, or balance your skin, 
    our treatments are tailored to suit your individual needs. We take pride in offering a serene 
    and relaxing environment, where you can unwind while our professionals work to restore your skin 
    to its natural glow. With regular visits, you’ll experience long-lasting results that leave your skin feeling fresh, 
    vibrant, and youthful.</p>
  </div>
  <div>
    <img src="products.jpg" class="mainsection" alt="Natural skincare products on display" />
  </div>
</div>

    </div>
    
  );
};

export default Skin;
