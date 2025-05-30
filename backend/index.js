const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

app.use("/api", authRoutes);

app.get("/", (req,res) => {
  res.json({
    message: "Success.",
    Name: "Manish Kumar",
    Phone: "+916377014168",
    Email: "manishkumar106033@gmail.com",
  })
})

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => console.log("MongoDB connection error:", err));
