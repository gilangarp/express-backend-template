import { Request, Response, NextFunction } from "express";
import logger from "../config/winstonConfig";

const winstonMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  logger.info(`Request: ${req.method} ${req.url} - IP: ${req.ip}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info(
      `Response: ${req.method} ${req.url} - IP: ${req.ip} - Status: ${res.statusCode} - Duration: ${duration}ms`
    );
  });

  next();
};

export default winstonMiddleware;
