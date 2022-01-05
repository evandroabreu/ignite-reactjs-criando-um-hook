import * as path from "path";
import * as winston from "winston";

function getLogger() {
    const colors = {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        debug: 'white',
    }

    winston.addColors(colors);

    const prefix_filename = `${path.join(__dirname, "../../logs")}/log_`;
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.combine(
            winston.format.label({
                label: `[HiKeBets]`
            }),
            winston.format.timestamp({
                format: 'DD-MM-YYYY HH:mm:ss'
            }),
            winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
        ),
        defaultMeta: { service: "user-service" },
        transports: [
            //
            // - Write all logs with level `error` and below to `error.log`
            // - Write all logs with level `info` and below to `combined.log`
            //
            new winston.transports.File({
                filename: `${prefix_filename}_error.log`,
                level: "error",
            }),

            new winston.transports.File({
                filename: `${prefix_filename}.log`,
                level: "info",
            }),

        ],
    });

    //
    // If we're not in production then log to the `console` with the format:
    // `${ info.level }: ${ info.message } JSON.stringify({ ...rest })`
    //
    logger.info('info', `APP_DEBUG is ${process.env.APP_DEBUG}`)

    //console.log(`APP_DEBUG is ${process.env.APP_DEBUG}`);

    if (process.env.APP_DEBUG == "true") {
        logger.add(
            new winston.transports.Console({
                format: winston.format.simple(),
            })
        );
    }

    return logger;
}

export { getLogger as Logger }
