const express = require("express");
const connectDb = require("./config/db");
const signupRouter = require("./signupApi");
const loginRouter = require("./login");
const blogRouter = require("./blog");
const commentRouter = require("./comment");

const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
connectDb();
 
app.use("/signup",signupRouter); 
app.use("/login", loginRouter); 
app.use("/blog", blogRouter);
app.use("/:id", blogRouter); 
app.use("/comment", commentRouter);

app.listen(5000, () => {
  console.log("index.js is listning on 5000...");
});
