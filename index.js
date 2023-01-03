const express = require("express");
const corsMiddleWare = require("cors");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");

const authRouter = require("./routers/auth");
const partnerRouter = require("./routers/partners");

const { PORT } = require("./config/constants");

const app = express();

app.use(corsMiddleWare());
app.use(fileUpload());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/partners", partnerRouter);

app.post("/upload-success", (req, res) => {
  console.log("files:", req.files);
  // console.log("pdf?", req);
  if (!req.files || !req.files.pdfFile) {
    console.log("HERE");
    res.status(400).send(`Something went wrong, please try again`);
    res.end();
  }
  pdfParse(req.files.pdfFile).then((result) => {
    console.log("result", result.text);
    res.send(result.text);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
