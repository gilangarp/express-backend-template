import winston from "winston";
import { format } from "logform";
import DailyRotateFile from "winston-daily-rotate-file";

const customFormat = format.printf((info) => {
  return `${info.timestamp} : ${info.level} : ${info.message}`;
});

const winstonConfig = {
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    customFormat,
    format.colorize()
  ),
  transports: [
    new DailyRotateFile({
      filename: "logs/error-%DATE%.log",
      level: "error",
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "14d",
    }),
    new DailyRotateFile({
      filename: "logs/warn-%DATE%.log",
      level: "warn",
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "14d",
    }),
    new DailyRotateFile({
      filename: "logs/info-%DATE%.log",
      level: "info",
      datePattern: "YYYY-MM-DD",
      maxSize: "100m",
      maxFiles: "14d",
    }),
    new winston.transports.Console({
      format: format.combine(customFormat),
    }),
  ],
};

const logger = winston.createLogger(winstonConfig);

export default logger;
