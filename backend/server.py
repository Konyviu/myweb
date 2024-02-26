from flask import Flask, jsonify, request
from pymongo.mongo_client import MongoClient
from flask_cors import CORS

CONNECTION_STRING = "mongodb+srv://AppDev10:Week_10@appdev.qvkswy2.mongodb.net/"
client = MongoClient(CONNECTION_STRING)
db = client["WebApp"]

Products = db["Product"]

#Main
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#Default
@app.route("/")
def Greet():
    return "<center><h1>Welcome To Product Management System</h1></center>"

#Show All Product
@app.route("/ShowProduct",methods = ["GET"])
def GetAllProduct():
    allProduct = Products.find({},{"_id":0})
    
    return jsonify({"Product":[prod for prod in allProduct]})

#Add a Product
@app.route("/AddProduct",methods = ["POST"])
def AddProduct():
    productData = request.json
    if productData:
        Products.insert_one(productData)
        return jsonify({"Message":"Product added succesfully!"}),201
    else:
        return jsonify({"Error":"Invalid product data!"}),400

#Delete a Product
@app.route("/DeleteProduct/<string:productName>",methods = ["DELETE"])
def DelProduct(productName):
    if productName:
        result = Products.delete_one({"name":productName})
        if result.deleted_count > 0:
            return jsonify({"Message": f"Product '{productName}' deleted successfully!"}),200
        else:
            return jsonify({"Error": f"Product '{productName}' not found!"}),404
    else:
        return jsonify({"Error": "Product name not provided!"}),400

#Update a Product
@app.route("/UpdateProduct/<string:productName>",methods = ["PUT"])
def updProduct(productName):
    productData = request.json
    if productData:
        value = int(productData.get("value"))
        quantity = int(productData.get("quantity"))
        
        result = Products.update_one(
            {"name":productName},
            {"$set": {"value": value, "quantity": quantity}}
        )
        
        if result.modified_count > 0:
            return jsonify({"Message": f"Product '{productName}' updated successfully!"}),200
        else:
            return jsonify({"Error": f"Product '{productName}' not found!"}),404
    else:
        return jsonify({"Error": "Invalid product data!"}),400

if __name__ == "__main__":
    app.run(host = "0.0.0.0",port = 5000,debug = True)
