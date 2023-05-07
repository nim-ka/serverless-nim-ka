const chalk = require('chalk');
const { DateTime } = require('luxon');

exports.handler = async () => {
  console.log(chalk.blue(`${DateTime.now()} | Calling Hello World`));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };
};
