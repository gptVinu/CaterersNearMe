const fs = require("fs");

const getAllCaterers = ()=>{
    return JSON.parse(fs.readFileSync("./data.json"));
};

const getCatererById = (id)=>{
    const data = getAllCaterers();
    return data.find(c=> c.id == id);
};

const addcaterer = (newCaterer)=>{
    const data = getAllCaterers();
    data.push(newCaterer);
    fs.writeFileSync("./data.json",JSON.stringify(data, null,2));
    return newCaterer;
};

function deleteCatererById(id) {
    const data = getAllCaterers();
    const index = data.findIndex(caterer => caterer.id == id);
    if (index === -1) return false;
    data.splice(index, 1);
    fs.writeFileSync(__dirname + "/../data.json", JSON.stringify(data, null, 2));
    return true;
}

module.exports = {
    getAllCaterers,
    getCatererById,
    addcaterer,
    deleteCatererById
};