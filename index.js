const assert = require('assert');

console.log(process.argv);
// console.log(chalk.cyan(`Test Name: ${process.env.TEST_NAME}`))
console.log(`Environment---> ${process.env.NODE_ENV}`);
console.log(`ENVVAR---> ${process.env.ENVVAR}`);
console.log(`ENV_PATH---> ${process.env.ENV_PATH}`);
console.log(`SERVER_URL---> ${process.env.SERVER_URL}`);

// assert(process.env.NODE_ENV === 'env-file');
// assert(process.env.ENVVAR === 'exists');
// assert(process.env.ENV_PATH === './.env');

// console.log(chalk.green('Asserts Pass!'))
