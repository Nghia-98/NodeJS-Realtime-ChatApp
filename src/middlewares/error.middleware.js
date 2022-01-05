import createError from 'http-errors';

const notFound = (req, res, next) => {
  const error = createError(404, `Not Found - ${req.originalUrl}`);
  next(error);
};

const defaultErrorHandler = (error, req, res, next) => {
  res.status(error.statusCode || 500);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : null
  });
};

export { notFound, defaultErrorHandler };
