from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(500), nullable=False)

class ParkingRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    car_plates = db.Column(db.String(20), nullable=False)
    driver_name = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    departure_time = db.Column(db.DateTime, nullable=False)
    duration = db.Column(db.Integer, nullable=False)

class Visitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    visitor_name = db.Column(db.String(100), nullable=False)
    house_number = db.Column(db.String(10), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    id_card_number = db.Column(db.String(50), nullable=False)
    time_in = db.Column(db.DateTime, nullable=False)
    time_out = db.Column(db.DateTime, nullable=True)
