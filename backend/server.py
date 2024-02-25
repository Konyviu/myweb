from flask import Flask, jsonify
from pymongo.mongo_client import MongoClient
from flask_cors import CORS

CONNECTION_STRING = "mongodb+srv://AppDev10:Week_10@appdev.qvkswy2.mongodb.net/"
client = MongoClient(CONNECTION_STRING)
db = client["WebApp"]

Products = db["Product"]

#Main
app = Flask(__name__)
CORS(app)

#Default
@app.route("/")
def Greet():
    return "<center><h1>Welcome To Product Management System</h1></center>"

#Show All Product
@app.route("/ShowProduct",methods = ["GET"])
def GetAllProduct():
    allProduct = Products.find({},{"_id":0})
    
    return jsonify({"Product":[prod for prod in allProduct]})

if __name__ == "__main__":
    app.run(host = "0.0.0.0",port = 5000,debug = True)
