import express from 'express';

const router = express.Router();

router.get('/servises', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default router;