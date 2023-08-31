import { Logger } from './Logger';

const Log = new Logger();
Log.showDebug = location.href.indexOf('idg-debug=1') >= 0;

export default Log;
