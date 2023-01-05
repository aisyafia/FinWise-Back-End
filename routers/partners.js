const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const { sequelize } = require("../models");

const User = require("../models").user;

const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  if (!req.user) {
    res
      .status(400)
      .send(`You are not authenticated to access this information`);
  }
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

router.get("/:id", authMiddleware, async (req, res) => {
  const partnerById = await User.findByPk(req.params.id);
  return res.status(200).send(partnerById);
});

module.exports = router;
