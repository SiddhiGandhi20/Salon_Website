import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import './BookAppointment.css';

const BookAppointment = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // State to handle success pop-up visibility
  const [fullName, setFullName] = useState(''); // State to store the full name

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false); // Reset success state before making the request

    // Convert the appointment date to dd-mm-yyyy format
    const formattedDate = appointmentDate.split('-').reverse().join('-'); // Convert to dd-mm-yyyy format

    const appointmentData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      service: service,
      appointment_date: formattedDate, // Pass the formatted date to the backend
    };

    try {
      const response = await axios.post('http://localhost:5000/book_appointment', appointmentData);
      setFullName(`${firstName} ${lastName}`); // Set the full name
      setSuccess(true); // Show the success pop-up
    } catch (err) {
      setError('There was an error booking your appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-appointment-page">
      <div className="book-appointment-container">
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service*</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              <option value="skin">Skin</option>
              <option value="hair">Hair</option>
              <option value="makeup">Makeup</option>
              <option value="handsAndFeet">Hands and Feet</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date*</label>
            <input
              type="date"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>

      {/* Success Pop-up Modal */}
      {success && (
        <div className="success-modal">
          <div className="success-modal-content">
            <p>Congratulations, {fullName}!</p>
            <p>Your appointment for <strong>{service}</strong> has been booked successfully.</p>
            <button onClick={() => setSuccess(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="quote-section">
        <img
          src="../image11.jpg" /* Replace with your image path */
          alt="Salon Booking"
        />
        <p>"A little pampering goes a long way."</p>
        <p>"Because you deserve to look and feel your best."</p>
        <p>"Book your appointment now for the ultimate salon experience."</p>
      </div>
    </div>
  );
};

export default BookAppointment;
