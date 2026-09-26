'use strict';
// This product offers no managed subscription: the model dock carries no subscription
// anchor and modeldock.js contains no subscription URL or handler. This guard fails if
// a subscription door is reintroduced without a deliberate test update.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf8');
assert.doesNotMatch(html, /model-dock-subscription/, 'no subscription anchor in the model dock');
assert.doesNotMatch(html, /starnetos\.com\/pricing/, 'no subscription pricing URL on the page');

const dock = fs.readFileSync(path.join(__dirname, '../frontend/app/modeldock.js'), 'utf8');
assert.doesNotMatch(dock, /openSubscription/, 'no subscription handler in the dock');
assert.doesNotMatch(dock, /starnetos\.com\/pricing/, 'no subscription pricing URL in the dock');
console.log('model-subscription: no subscription door in dock or page — passed');
