"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Zorro",
        email: "zorro@z.com",
        password: bcrypt.hashSync("black", 10),
        serviceProvider: true,
        companyName: "BROADSTREET",
        companyEmail: "info@broadstreet.nl",
        companyWebsite: "https://broadstreet.nl/",
        companyPhoneNumber: 31202624300,
        companyLocation: "Herengracht 500, 1017 CB Amsterdam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yuzu",
        email: "yuzu@y.com",
        password: bcrypt.hashSync("citrus", 10),
        serviceProvider: true,
        companyName: "BDO",
        companyEmail: "info@bdo.nl",
        companyWebsite: "https://www.bdo.nl/en-gb/bdo-netherlands",
        companyPhoneNumber: 31402698111,
        companyLocation: "Krijgsman 9, 1186 DM, Amstelveen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Whitney",
        email: "whitney@w.com",
        password: bcrypt.hashSync("singer", 10),
        serviceProvider: true,
        companyName: "Black Swan Capital",
        companyEmail: "",
        companyWebsite: "https://blackswancapital.eu/",
        companyPhoneNumber: 31202091568,
        companyLocation: "Herengracht 280, 1016 BX, Amsterdam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vera",
        email: "vera@v.com",
        password: bcrypt.hashSync("design", 10),
        serviceProvider: true,
        companyName: "FVB de Boer",
        companyEmail: "",
        companyWebsite: "https://fvbdeboer.nl/",
        companyPhoneNumber: 31705118788,
        companyLocation: "J. Verhulststraat 163hs, 1075 GX, Amsterdam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ultron",
        email: "ultron@u.com",
        password: bcrypt.hashSync("marvel", 10),
        serviceProvider: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tango",
        email: "tango@t.com",
        password: bcrypt.hashSync("wafer", 10),
        serviceProvider: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Syrax",
        email: "syrax@s.com",
        password: bcrypt.hashSync("dragon", 10),
        serviceProvider: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
