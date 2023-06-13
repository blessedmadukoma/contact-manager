const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ messsage: "Get all contacts" });
});

router.route("/").post((req, res) => {
  res.status(200).json({ messsage: "Create Contaact" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ messsage: `Get contact for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ messsage: `Update contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ messsage: `Delete contact for ${req.params.id}` });
});

module.exports = router;
