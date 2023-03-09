import express from "express";
import { Review } from "../../db/models";

const router = express.Router();

router.get("/", async (req, res) => {
  const reviews = await Review.findAll();
  const initState = { reviews };
  res.render("Layout", initState);
})



export default router;
