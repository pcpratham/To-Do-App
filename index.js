const express = require("express");
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/database");
const operations = require("./routes/operations");
require("dotenv").config();


app.use(express.json());
app.use(cors());
app.use("/api/to-do",operations);
app.listen(PORT,()=>{
    console.log(`Port started @ ${PORT}`);
});

dbConnect();

