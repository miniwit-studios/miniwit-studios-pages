let config = require('config');

module.exports = (function() {
    function traverse(obj, prefix, pairs) {
        if (typeof obj === 'undefined' || typeof obj === 'function') return;
        if (obj === null || typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
            pairs.push([prefix, JSON.stringify(obj)]);
            return;
        }
        
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                traverse(obj[prop], `${prefix}.${prop}`, pairs);
            }
        }
    }
    
    let pairs = [];
    traverse(config, 'CONFIG', pairs);
    console.log(`Injecting configuration values:`);
    for (let q = 0; q < pairs.length; q++) {
        let pair = pairs[q];
        console.log(`${pair[0]}: ${pair[1]}`);
    }
    
    let clientConfig = {};
    pairs.map(pair => clientConfig[pair[0]] = pair[1]);
    return clientConfig;
})();
