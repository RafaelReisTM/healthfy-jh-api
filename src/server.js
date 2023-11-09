const app = require('./app');
const db = require('./database/db');

const PORT = process.env.PORT || 3030;

db.query('SELECT 1')
  .then(() => {
    console.log('db connection succeeded');
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  })
  .catch((err) => console.log(`db connection failed: \n${err}`));
