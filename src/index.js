const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
  console.log(`SERVER RUN IN http://localhost:${port}`);
});
