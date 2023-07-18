import { createLogger, transports, format, Logger } from 'winston';


function createlogger(): Logger {
return  createLogger({
      level: 'info', 
      format: format.combine(
        format.colorize(),
        format.simple()
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs.txt' }) 
      ],
    });
}

export const  logger = createlogger()
