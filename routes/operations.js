const express = require("express");
const router = express.Router();

const {newEntry,getAllEntry,deleteEntry} = require("../controllers/Operations");

router.post("/createNewTask",newEntry);
router.get("/getAllEntry",getAllEntry);
router.delete("/deleteTask/:id",deleteEntry);
module.exports = router;