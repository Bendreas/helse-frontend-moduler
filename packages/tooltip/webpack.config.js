const path = require('path');
const baseConfig = require('../webpack.base');

module.exports = {
    ...baseConfig,
    entry: './src/index.ts',
    output: {
        ...baseConfig.output,
        library: 'helse-frontend-tooltip',
        path: path.resolve(__dirname, 'lib')
    }
};
