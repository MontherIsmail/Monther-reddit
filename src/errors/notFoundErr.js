const {join} = require('path');

const notFoundErr = (req, res) => {
  // eslint-disable-next-line max-len
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'));
};

module.exports = {notFoundErr};
