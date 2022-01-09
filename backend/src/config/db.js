const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
   
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rb4ov.mongodb.net/Techu?retryWrites=true&w=majority`
    );
  } catch (err) {
    console.log(err);
  }
};