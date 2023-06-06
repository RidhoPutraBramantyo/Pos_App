const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT;
const db = require("./models");
const routes = require("./routes");

// db.sequelize.sync({ alter: true });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("test"));

app.use("/users", routes.userRoutes);
app.use("/product", routes.productRoutes);
app.use("/product", express.static(`${__dirname}/public/product`));

app.listen(PORT, () => {
	console.log(`server is running on PORT: ${PORT}`);
});
