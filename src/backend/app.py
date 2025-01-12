from flask import Flask, request, jsonify
from datetime import datetime
import pymongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB connection setup
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["salon"]
appointments_collection = db["appointments"]
contact_us_collection = db["contact-us"]  # New collection for contact form submissions

# API for booking an appointment
@app.route('/book_appointment', methods=['POST'])
def book_appointment():
    try:
        data = request.get_json()
        print("Received Data:", data)  # Log the incoming data for debugging

        # Extract appointment details
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        phone_number = data.get('phone_number')
        service = data.get('service')
        appointment_date = data.get('appointment_date')

        # Validate input
        if not all([first_name, last_name, email, phone_number, service, appointment_date]):
            return jsonify({"error": "All fields are required"}), 400

        # Convert the appointment date from dd-mm-yyyy to datetime object
        appointment_date = datetime.strptime(appointment_date, '%d-%m-%Y')
        print("Appointment Date:", appointment_date)  # Log the converted date

        # Create the appointment document
        appointment = {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "phone_number": phone_number,
            "service": service,
            "appointment_date": appointment_date
        }

        # Insert the appointment into the database
        result = appointments_collection.insert_one(appointment)
        print(f"Inserted appointment with ID: {result.inserted_id}")  # Log the inserted ID

        return jsonify({"message": "Appointment booked successfully!"}), 200

    except Exception as e:
        print("Error:", str(e))  # Log the error for debugging
        return jsonify({"error": str(e)}), 500


# API for submitting the contact form
@app.route('/submit_contact_form', methods=['POST'])
def submit_contact_form():
    try:
        data = request.get_json()
        print("Received Contact Form Data:", data)  # Log the incoming data for debugging

        # Extract contact form details
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Validate input
        if not all([name, email, message]):
            return jsonify({"error": "All fields are required"}), 400

        # Create the contact form document
        contact_form = {
            "name": name,
            "email": email,
            "message": message,
            "submitted_at": datetime.utcnow()  # Record the submission time
        }

        # Insert the contact form into the database
        result = contact_us_collection.insert_one(contact_form)
        print(f"Inserted contact form with ID: {result.inserted_id}")  # Log the inserted ID

        return jsonify({"message": "Message sent successfully!"}), 200

    except Exception as e:
        print("Error:", str(e))  # Log the error for debugging
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
