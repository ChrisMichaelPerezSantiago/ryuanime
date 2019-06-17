const compose = require('compose-middleware').compose;
import Middleware from './middleware'

let middleware = compose([
  Middleware.requestLoggerMiddleware,
  Middleware.notFound,
  Middleware.errorHandler,
]);

export default middleware;