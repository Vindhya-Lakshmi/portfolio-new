require("dotenv").config();

const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});