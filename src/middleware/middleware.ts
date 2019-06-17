import * as express from 'express';
import { HttpException } from '../exceptions/HttpException';


class Middleware {
  public notFound(req: express.Request, res: express.Response, next: express.NextFunction): void {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
  }

  public errorHandler(err: HttpException, req: express.Request, res: express.Response, next: express.NextFunction): void {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
  }

  public requestLoggerMiddleware(req: express.Request, res: express.Response, next: express.NextFunction): void {
    console.log(`${req.method} ${req.originalUrl}`);
    const start = new Date().getTime();
    res.on('finish', () => {
      const elapsed = new Date().getTime() - start;
      console.info(`${req.method} ${req.originalUrl} ${req.statusCode} ${elapsed}ms`);
    });
    next();
  }
}

export default new Middleware;