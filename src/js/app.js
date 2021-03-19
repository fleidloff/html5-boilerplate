const testModules = require('./test-module');
const perf = require('./perf');
const repaint = require('./repaint');
require('./copyNodes');
require('../css/app.css');

// SPECIFICITY
// require('../css/specificity1.css');
// require('../css/specificity2.css');
// require('../css/specificity3.css');
// document.getElementById("articles").setAttribute("style", "background: green;")
// require('../css/specificity4.css');
// require('../css/specificity5.css');

// REPAINT
//setTimeout(repaint, 500);

perf();
