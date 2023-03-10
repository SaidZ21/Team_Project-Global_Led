export const pathMiddleware = (req, res, next) => {
  res.locals.url = req.url;
  next();
};

// если не авторизован то не зайдет на страницу
export const isAuthApi = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.sendStatus(401);
};

export const userSession = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};
