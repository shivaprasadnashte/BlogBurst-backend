const express = require("express");
const app = new express();
const signupSchema = require("./module/module");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const signupRouter = express.Router();

signupRouter.route('/').post( async (req, res) => {
  const {name, username, password} = await req.body;
  if(!name || !username || !password) return res.status(400).send('All fields are required');
  const userExist = await signupSchema.User.findOne({ username });
  if(userExist) return res.status(400).send('Username already exists');
  const signup = new signupSchema.User({
    name: name,
    username: username,
    password: password,
  });
   await signup.save();
  res.send(signup);
});

signupRouter.route('/').get( (req, res) => {
  signupSchema.User.findOne({ username: req.body.username }).then((signup) => {
    res.json(signup);
  });
});



module.exports = signupRouter;
