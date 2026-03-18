const express = require("express");
const router = express.Router();

const {
    fetchCaterers,
    fetchCatererById,
    createCaterer,
    removeCaterer
}= require("../controller/catererController");

router.get("/",fetchCaterers);
router.get("/:id",fetchCatererById);
router.post("/",createCaterer);
router.delete("/:id",removeCaterer);

module.exports = router;