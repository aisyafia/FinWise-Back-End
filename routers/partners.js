const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const { sequelize } = require("../models");

const User = require("../models").user;

const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const partners = await User.findAll({
      order: ["id"],
      where: { serviceProvider: true },
    });
    return res.status(200).send(partners);
  } catch (e) {
    console.log("An error occur", e);
  }
});

module.exports = router;
