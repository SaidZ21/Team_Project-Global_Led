import express from 'express';
import { Review } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const reviews = await Review.findAll();
  const initState = { reviews };
  res.render('Layout', initState);
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Review.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.error();
    res.sendStatus(500);
  }
});

export default router;
