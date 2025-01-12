import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './HandsAndFeet.css'; // Importing the CSS file

const HandsFeet = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: 'Manicure',
      items: [
        {
          name: 'Cuticle Care',
          description: 'Nurturing the cuticles to keep your nails healthy and clean.'
        },
        {
          name: 'Nail Shaping',
          description: 'Trimming and shaping nails to your preferred style.'
        },
        {
          name: 'Polish Application',
          description: 'Application of nail polish for a fresh and elegant look.'
        },
        {
          name: 'French Manicure',
          description: 'A classic look with a clean, natural base and white-tipped nails.'
        }
      ]
    },
    {
      title: 'Pedicure',
      items: [
        {
          name: 'Exfoliation',
          description: 'Removing dead skin to reveal soft and smooth feet.'
        },
        {
          name: 'Massage',
          description: 'Relaxing massage for the feet, promoting circulation and relaxation.'
        },
        {
          name: 'Foot Mask',
          description: 'Nourishing mask treatment for hydrated and refreshed feet.'
        },
        {
          name: 'Nail Polish',
          description: 'Colorful polish to beautify your nails and give them a polished look.'
        }
      ]
    },
    {
      title: 'Nail Art',
      items: [
        {
          name: 'Designs & Patterns',
          description: 'Creative nail art designs, including patterns and illustrations.'
        },
        {
          name: 'Rhinestones',
          description: 'Glamorous rhinestones added to your nails for a touch of sparkle.'
        },
        {
          name: 'Glitter Art',
          description: 'Shimmering glitter applied to nails for a fun and festive look.'
        }
      ]
    }
  ];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div>
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
    <div className="manicure-conntainer">
        <div className="mani-container">
          <h1>Manicure</h1>
          <p>
          Taking good care of your hair can make all the difference in achieving healthy, shiny, and strong locks.
           Start by using a shampoo and conditioner suitable for your hair type to maintain moisture and prevent damage. 
           Regular trimming is essential to remove split ends and encourage growth. 
           Always protect your hair from heat styling tools by using a heat protectant spray or serum.
           Deep conditioning treatments, once a week, help restore hydration and nourishment. 
           Additionally, avoid tight hairstyles that can lead to hair breakage and try not to wash your hair every day to retain natural oils. 
           Eating a balanced diet rich in vitamins and minerals, especially those like biotin, zinc, and vitamins A 
           and E, can also contribute to better hair health. Lastly, gentle brushing with a wide-toothed comb or a soft-bristle brush can
            prevent unnecessary hair loss and breakage.          </p>
        </div>
        <div className="image-container">
          <img
            src="mani.jpg"
            className="mainsection"
            alt="skincare"
          />
        </div>
      </div>
      <div className="pedicure-container">
      <img
        src="pedi.jpg"
        className="mainsection"
        alt="Relaxing spa environment"
      />
      <div className="pedicure-content">
      <h1>Pedicure</h1>
      <p>
        Experience the art of hair coloring with our expert stylists who blend creativity and precision.
         Whether you're looking for a subtle change with highlights or a bold transformation with a full color makeover, 
         our salon offers a wide range of shades and techniques to suit your personality. 
         From balayage to ombre, and everything in between, our premium color services are designed to 
         enhance your natural beauty and bring out the best in your hair. Our nourishing treatments ensure 
         that your hair stays healthy, vibrant, and full of life, all while achieving the perfect color you've always dreamed of.
      </p>

      </div>
    </div>


  <div class="nail-container">
  <div class="text-container">
    <h1>Nails</h1>
    <p>
    Indulge your hair in the care it deserves with our premium hair treatment services. 
      Whether you're dealing with dryness, damage, or lack of volume, our customized treatments are 
      designed to restore your hair's natural vitality. Our expert stylists assess your 
      hair's needs and recommend solutions like deep conditioning, keratin treatments, 
      or scalp therapies to rejuvenate and strengthen every strand. 
      Using cutting-edge technology and nourishing products infused with natural ingredients, 
      we target the root of the problem for long-lasting results. Step into our serene environment, 
      unwind, and let our professionals transform your hair into its healthiest, most radiant state. 
      With every visit, you'll leave with hair that's soft, shiny, and full of life, boosting your confidence and style.</p>
  </div>
  <div>
    <img src="nails1.jpg" class="mainsection" alt="Natural skincare products on display" />
  </div>
</div>

    </div>
  );
};

export default HandsFeet;
