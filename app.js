import 'dotenv/config';

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const timeout = require('connect-timeout')

const app = express()
const port = 3000

// connect to db
const uri = process.env.URI_MONGO_DB
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);

// middlewares
app.use(express.json())

// import routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const verifyToken = require("./routes/validate-token");

// route middlewares
app.use("/api/user", authRoutes);

// ova samo go nemam testirano
// this route is protected with token
app.use("/api/dashboard", verifyToken, dashboardRoutes)
