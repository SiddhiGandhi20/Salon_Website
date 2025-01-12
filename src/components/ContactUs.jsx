import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setResponseMessage("All fields are required.");
      return;
    }

    setIsLoading(true);
    setResponseMessage('');

    const data = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // Replace with your API URL
      const apiResponse = await fetch('https://your-api-url.com/submit_contact_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await apiResponse.json();

      if (apiResponse.ok) {
        // Open WhatsApp Click-to-Chat after successful API request
        const whatsappMessage = `Hello, you have a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/9307792877?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');


        setResponseMessage("Message sent successfully!");
      } else {
        setResponseMessage(result.error || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("Error sending message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        <div className="contact-form-section">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out to us anytime!</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="half-width-input">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="half-width-input">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="full-width-input">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="submit-btn" type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>

        <div className="contact-info-section">
          <h2>Contact Info</h2>
          <p>For more information</p>
          <ul>
            <li><a href="tel:+1234567890">+123-456-7890</a></li>
            <li><a href="mailto:reallygreatsite.com">reallygreatsite.com</a></li>
            <li><a href="https://www.instagram.com/reallygreatsite">@reallygreatsite</a></li>
            <li>123 Anywhere St., Any City</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;