from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# M-Pesa credentials (you need to set these up in your environment variables or configuration file)
MPESA_CONSUMER_KEY = 'your_consumer_key'
MPESA_CONSUMER_SECRET = 'your_consumer_secret'
MPESA_SHORTCODE = 'your_shortcode'
MPESA_LIPA_NG_CONTACT = 'your_shortcode'
MPESA_PASSKEY = 'your_passkey'
MPESA_LIPA_NG_SHORTCODE = 'your_shortcode'
MPESA_API_URL = 'https://sandbox.safaricom.co.ke'

# Sample responses for the chatbot
chatbot_responses = {
    "How do I pay my rent?": "You can pay your rent through the Payments page. Choose 'Rent' as the payment type and follow the instructions.",
    "What should I do if something is broken in my apartment?": "Please submit a maintenance request in the Settings section under 'Maintenance Request'.",
    "How can I contact my landlord?": "You can send a message directly through this Messaging page.",
    "Where can I find my tenant profile?": "Your tenant profile can be found on the Home page.",
    "How do I update my contact details?": "You can update your contact details in the Settings page under 'Notification Settings'.",
}

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the API"}), 200

@app.route('/api/messages', methods=['POST'])
def send_message():
    data = request.json
    # Here you would typically save the message to a database
    return jsonify({"status": "Message sent", "data": data}), 200

@app.route('/api/parking', methods=['POST'])
def submit_parking_request():
    data = request.json
    # Here you would typically save the parking request to a database
    return jsonify({"status": "Parking request submitted", "data": data}), 200

@app.route('/api/visitors', methods=['POST'])
def record_visitor_entry():
    data = request.json
    # Here you would typically save the visitor entry to a database
    return jsonify({"status": "Visitor entry recorded", "data": data}), 200

@app.route('/api/visitors', methods=['PUT'])
def update_visitor_time_out():
    data = request.json
    # Here you would typically update the visitor's time out in the database
    return jsonify({"status": "Visitor time out updated", "data": data}), 200

@app.route('/api/mpesa/pay', methods=['POST'])
def mpesa_payment():
    data = request.json
    amount = data.get('amount')
    phone_number = data.get('phone_number')

    # Authenticate and get the access token
    auth_url = f"{MPESA_API_URL}/v1/oauth2/token"
    auth_response = requests.get(auth_url, auth=(MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET))
    access_token = auth_response.json().get('access_token')

    # Initiate the payment
    payment_url = f"{MPESA_API_URL}/v1/quickteller/enterprise"
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    payload = {
        "BusinessShortCode": MPESA_LIPA_NG_SHORTCODE,
        "Password": "base64_encoded_password",
        "Timestamp": "timestamp",
        "TransactionType": "Payment",
        "Amount": amount,
        "PartyA": phone_number,
        "PartyB": MPESA_LIPA_NG_SHORTCODE,
        "PhoneNumber": phone_number,
        "CallBackURL": "your_callback_url",
        "AccountReference": "Test123",
        "TransactionDesc": "Payment for services"
    }

    response = requests.post(payment_url, headers=headers, json=payload)
    return jsonify(response.json()), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
