const express = require("express");
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Shivaprasad:Pass123@cluster0.cwxauli.mongodb.net/students?retryWrites=true&w=majority"
    );
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
