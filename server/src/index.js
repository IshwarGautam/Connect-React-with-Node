import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const DUMMY_JSON = {
  name: "IG Tech Team",
};

app.get("/", (req, res) => {
  res.status(201).json(DUMMY_JSON);
});

app.listen(port, () => {
  console.log(`Sucessfully connected on port ${port}`);
});
