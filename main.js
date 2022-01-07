const express = require("express");
const App = express();
App.use(express.json());

const cors = require("cors");
const { addmsg, getmsg } = require("user");
App.use(cors());

//http://localhost:4000/getmsg
App.get("/getmsg", async (req, res) => {
  const list = await getmsg();
  res.json(list);
});

//http://localhost:4000/addmsg
App.post("/addmsg", async (req, res) => {
  const data = req.body;
  await addmsg(data);
  res.json({ message: "message sent...." });
});

ASSpp.listen(4000, () => console.log("Server Started...."));
