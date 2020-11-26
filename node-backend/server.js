const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config("./.env");
//require("./jwtTokenValidation/deleteExpiredToken.js"); 
const indexRoute = require("./routes/index");
const dbConn = require("./models/sequelize");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dbConn.sequelize;

const corsOption = {
  origin: [
    "http://localhost:3000",
  ],
};

app.use("/", cors(corsOption), indexRoute); 
const httpServer = http.createServer(app);
httpServer.listen(process.env.HTTP_PORT || 8080,()=>{
    console.log(`server start on port ${process.env.HTTP_PORT}`)
});
module.exports = app;