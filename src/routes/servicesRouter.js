import express from 'express';
import { Service } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const services = await Service.findAll();
  const initState = { services };
  res.render('Layout', initState);
});

router.get("/", async (req, res) => {
  const more = await More.findAll();
  res.render("Layout", {more});
});

// router.post("/", async (req, res) => {
//   const { name, url, text } = req.body;
//   const newService = await Service.create({ name, url, text });
//   res.json(newService);
// });
// ПЕРЕПРОВЕРИТЬ!!!
export default router;
