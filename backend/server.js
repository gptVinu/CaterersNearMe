const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({origin:"*"}));
app.use(express.json());

const PORT = 8080;

//importing routes
const catererRoutes = require("./routes/catererRoutes");
app.use("/api/caterers",catererRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running in Port-${PORT}`);
});



