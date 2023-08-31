import { Logger } from './Logger';

const logger = new Logger();
logger.showDebug = process.env.NODE_ENV === 'development' || location.href.indexOf('debug=1') >= 0;
export default logger;
