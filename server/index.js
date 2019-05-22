const express = require("express");
const app = express();
const cors = require("cors");

//Ensure routes are defined before listening
const PORT = process.env.PORT || 8080;

app.use(express.json()); //Body parser
app.use(cors()); //Allow cross origin

app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}...`);
});

//Put routes here:
app.use("/inventory", require("./routes/inventory"));
app.use("/warehouses", require("./routes/warehouses"));