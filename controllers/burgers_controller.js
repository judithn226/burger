const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let burgerObj = {
      burgers: data,
    };

    res.render("index", burgerObj);
  });
});

router.post("/burgers", function (req, res) {
  burger.insert0ne(["burger_name"], [req.body.burger_name], function (data) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  let condition = "id =" + req.params.id;

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    function (data) {
      res.redirect("/");
    }
  );
});

module.exports = router;
