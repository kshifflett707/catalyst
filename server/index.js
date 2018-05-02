const express = require('express');

const applyMiddleware = require('./middleware/middleware.js');
const router = require('./routes/routes.js');

const app = express();

applyMiddleware(app);
app.use('/', router);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`listening to port ${PORT}`));
}

module.exports = app;