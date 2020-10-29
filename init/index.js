require('./init.env');
require('./init.database');
require('./init.uploads');
const app = require('./init.app');
require('./init.server')(app);