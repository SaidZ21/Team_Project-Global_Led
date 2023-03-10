import { Service } from '../../db/models';

const adminPriv = async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundService = await Service.findOne({ where: { id } });
    if (foundService?.isAdmin === req?.session?.user?.id) {
      return next();
    }
  } catch (error) {
    console.error();
    return res.sendStatus(500);
  }
  res.sendStatus(401);
};
