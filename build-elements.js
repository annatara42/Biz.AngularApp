const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/runtime.js',
        './dist/polyfills.js',
        './dist/scripts.js',
        './dist/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/app-storage-explorer.js');
    if (fs.existsSync('app-storage-explorer-test/app-storage-explore-test.js')) {
        fs.unlinkSync('app-storage-explorer-test/app-storage-explore-test.js');
    }
    fs.copyFileSync('elements/app-storage-explorer.js', 'app-storage-explorer-test/app-storage-explore-test.js');
})();