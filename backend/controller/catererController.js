const {
    getAllCaterers,
    getCatererById,
    addcaterer,
    deleteCatererById
}= require("../model/catereModel");

//get method
const fetchCaterers = (req,res)=>{
    const data = getAllCaterers();
    res.json(data);
};

//get by id
const fetchCatererById = (req,res)=>{
    const caterer = getCatererById(req.params.id);
    if (!caterer){
        return res.status(404).json({message : "caterer not found !"});
    }
    res.json(caterer);
};

//post
const createCaterer = (req,res)=>{
    const {name, location, pricePerPlate, cuisines,rating} = req.body;

    if (!name || !location || !pricePerPlate){
        return res.status(400).json({message:"Missing required fields !"});
    }

    const newCaterer = {
        id : Date.now(),
        name,
        location,
        pricePerPlate,
        cuisines : cuisines || [],
        rating : rating || 0
    };

    const saved = addcaterer(newCaterer);
    res.status(201).json(saved);
};

//remove caterer
const removeCaterer = (req, res) => {
    const id = req.params.id;
    const deleted = deleteCatererById(id);
    if (!deleted) {
        return res.status(404).json({ message: "Caterer not found!" });
    }
    res.json({ message: "Caterer deleted successfully." });
};

module.exports = {
    fetchCaterers,
    fetchCatererById,
    createCaterer,
    removeCaterer
};