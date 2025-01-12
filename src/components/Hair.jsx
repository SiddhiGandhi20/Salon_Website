import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Hair.css'; // Importing the CSS file

const Hair = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: 'Haircut',
      items: [
        { name: 'Layered Cut', description: 'A haircut where the hair is cut in layers of different lengths, creating volume and texture.' },
        { name: 'V-Cut', description: 'A cut where the hair is shaped into a V at the back, creating a sleek, pointed look.' },
        { name: 'Curtain Bangs', description: 'Bangs that are parted in the middle, framing the face like curtains.' },
        { name: 'Side Swept Bangs', description: 'Bangs that are swept to the side, offering a soft and flattering look.' },
        { name: 'Fringe/Bangs', description: 'Bangs that are cut straight across the forehead, offering a bold, statement look.' }
      ]
    },
    {
      title: 'Hair Color',
      items: [
        { name: 'Root Touch-Up', description: 'A treatment that re-applies color to the roots to cover gray or regrowth.' },
        { name: 'Full Color', description: 'A complete color application to all the hair for a uniform look.' },
        { name: 'Highlights', description: 'Lightened strands of hair to add dimension and contrast.' },
        { name: 'Balayage', description: 'A freehand hair coloring technique that gives a sun-kissed, natural look.' }
      ]
    },
    {
      title: 'Hair Treatments',
      items: [
        { name: 'Deep Conditioning', description: 'A treatment that nourishes and repairs dry or damaged hair with moisture-rich ingredients.' },
        { name: 'Keratin Treatment', description: 'A treatment that adds shine and smoothness to the hair by infusing keratin proteins.' },
        { name: 'Scalp Treatment', description: 'A therapy focused on improving scalp health, reducing dandruff, and promoting hair growth.' },
        { name: 'Hair Spa', description: 'A relaxing treatment that rejuvenates the hair and scalp with a blend of oils and nourishment.' }
      ]
    },
    {
      title: 'Styling',
      items: [
        { name: 'Blow Dry', description: 'A technique that uses a blow dryer to dry and style the hair, creating volume and smoothness.' },
        { name: 'Curls & Waves', description: 'A styling technique to add soft curls or waves to the hair for a bouncy, textured look.' },
        { name: 'Straightening', description: 'A treatment that uses heat to straighten curly or wavy hair for a sleek and polished appearance.' },
        { name: 'Updo Style', description: 'A hairstyle where the hair is styled and pinned up, typically for special occasions.' }
      ]
    },
    {
      title: 'Texture',
      items: [
        { name: 'Texturizing', description: 'A technique to add volume and texture to the hair for a fuller, more lively appearance.' },
        { name: 'Perming', description: 'A chemical treatment that adds curls or waves to straight hair, lasting for months.' },
        { name: 'Relaxing', description: 'A chemical treatment that relaxes and straightens curly or frizzy hair.' },
        { name: 'Volume Treatment', description: 'A treatment designed to add volume to flat or limp hair, giving it body and bounce.' }
      ]
    }
  ];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div>
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
     {/* Hair-Care Container */}
     <div className="hair-care-conntainer">
        <div className="haircare-container">
          <h1>Hair Care Tips</h1>
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
            src="haircare1.jpg"
            className="mainsection"
            alt="skincare"
          />
        </div>
      </div>
      <div className="color-container">
      <img
        src="haircolor.jpg"
        className="mainsection"
        alt="Relaxing spa environment"
      />
      <div className="content">
      <h1>Transform Your Look with Stunning Hair Color</h1>
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


  <div class="product-container">
  <div class="text-container">
    <h1>Revitalize Your Hair, Revive Your Confidence</h1>
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
    <img src="hairt.jpg" class="mainsection" alt="Natural skincare products on display" />
  </div>
</div>

    </div>
  );
};

export default Hair;
