const mongoose = require("mongoose");

const database = async (req, res) => {
  mongoose.connect(
    "mongodb+srv://patelmonil7908:Oh8SVH2X16DSKTBO@cluster0.hnpclfu.mongodb.net/mydb"
  );
  console.log("Database Connected");
};

module.exports = database;
