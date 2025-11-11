from flask import Flask, jsonify
from flask_cors import CORS
import json, os

app = Flask(__name__)

# ✅ Apply CORS globally for all endpoints
CORS(app) 

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route("/api/frontend/navbar")
def get_navbar():
    with open(os.path.join(BASE_DIR, "data", "navbar.json")) as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/api/frontend/home")
def get_home():
    with open(os.path.join(BASE_DIR, "data", "hero.json")) as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/api/frontend/services")
def get_services():
    with open(os.path.join(BASE_DIR, "data", "services.json")) as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
