import winston from "winston";

const Logger = winston.createLogger({
  transports: [new winston.transports.Console({
    silent: false
  })],
  format: winston.format.combine(
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf(
      (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
    )
  ),
});

export default Logger;
