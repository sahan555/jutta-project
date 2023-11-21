const express = require("express");
const router = express.Router();
const shoeModel = require("../models/shoeModel");
const domain = "http://localhost:5000";
const uploadServices = require("../services/uploadServices");

// @route POST profile/create by taking the ref of the user
// @desc Create a profile

// @access Private
router.post(
  "/shoe/create",
  uploadServices.shoeImage.single("img"),
  async (req, res) => {
    const data = req.body;
    
    
    const file = req.file;
    try {
      const existingShoe = await shoeModel.findOne({ name: data.name });

      if (existingShoe) {
        return res.status(400).json({ error: "Shoe already exists" });
      }
      if (!file || file.length === 0) {
        return res.status(400).send("Please upload an image");
      }
      const image = domain + "/public/shoe/" + file.filename;
      const shoe = new shoeModel({
        name: data.name,
        price: data.price,
        info: data.details,
        quantity: data.stockquantity,
        img: image,
      });
      await shoe.save();
      res.status(200).json({ msg: "shoe created successfully", shoe });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);


// code for get the profile by taking the ref of the user
// @route GET profile/get
// @desc Get a profile
// @access Private
router.get("/shoe/get", async (req, res) => {
  try {
    const shoe = await shoeModel.find();
    if (!shoe) {
      return res.status(400).send("shoe not found");
    }
    res.json({ msg: "shoe fetched", success: true, shoe });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/shoe/get/:id", async (req, res) => {
  try {
    const shoe = await shoeModel.findById(req.params.id);
    if (!shoe) {
      return res.status(400).send("shoe not found");
    }
    res.json({ msg: "shoe fetched", success: true, shoe });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
