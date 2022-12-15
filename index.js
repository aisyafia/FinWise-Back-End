const express = require("express");
const corsMiddleWare = require("cors");

const authRouter = require("./routers/auth");
const partnerRouter = require("./routers/partners");

const { PORT } = require("./config/constants");

const app = express();

app.use(corsMiddleWare());

app.use(express.json());

app.use("/auth", authRouter);
app.use("/partners", partnerRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
