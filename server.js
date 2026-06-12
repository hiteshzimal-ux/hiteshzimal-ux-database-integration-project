require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB =
require("./config/db");

const errorHandler =
require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        message:
        "Project 3 API Running"
    });
});

app.use(
    "/api/users",
    require("./routes/userRoutes")
);

app.use(errorHandler);

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server Running on Port ${PORT}`
    );
});