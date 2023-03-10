import express from 'express';
import { Service } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const services = await Service.findAll();
  const initState = { services };
  res.render('Layout', initState);
});

router.get('/', async (req, res) => {
  const more = await More.findAll();
  res.render('Layout', { more });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Service.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.error();
    res.sendStatus(500);
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const editService = await Service.findOne({ where: { id: req.params.id } });
    const {
      name, url, text, info,
    } = req.body;

    editService.name = name;
    editService.url = url;
    editService.text = text;
    editService.info = info;
    editService.save();
    res.json(editService);
  } catch (error) {
    console.error();
    res.sendStatus(500);
  }
});

// router.post("/", async (req, res) => {
//   const { name, url, text } = req.body;
//   const newService = await Service.create({ name, url, text });
//   res.json(newService);
// });
// ПЕРЕПРОВЕРИТЬ!!!
export default router;
