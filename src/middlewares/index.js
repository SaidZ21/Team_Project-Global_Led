export const pathMiddleware = (req, res, next) => {
  res.locals.url = req.url;
  next();
};
