const express = require("express");
const { addTransection, getAllTransection } = require("../controllers/transectionctrl");

//router object
const router = express.Router();

//routes
//add transection POST method
router.post("add-transection",addTransection);

//get Transection
router.post("/get-transection", getAllTransection);


module.exports = router;