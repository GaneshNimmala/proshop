const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next).catch(next));
};
export default asyncHandler;

//async handler is a middleware for handling errors.
