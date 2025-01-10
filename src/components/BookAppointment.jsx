import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Service:', service);
    console.log('Appointment Date:', appointmentDate);
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
            <input
              type="text"
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            />
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
          <button type="submit">Book Appointment</button>
        </form>

         
      </div>
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
