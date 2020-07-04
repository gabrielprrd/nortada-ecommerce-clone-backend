const app = require('./app.js');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and host ${HOST}`);
});
